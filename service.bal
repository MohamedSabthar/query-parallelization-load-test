// import movie_rating_system.mock.datasource;
import movie_rating_system.datasource;

import ballerina/graphql;
import ballerina/http;
import ballerina/log;
import ballerina/time;
import ballerina/uuid;

import xlibb/pubsub;

const MOVIE_TOPIC = "movies";

configurable boolean enableGraphiql = false;
configurable boolean enableIntrospection = false;
configurable int maxQueryDepth = 10000;
configurable boolean initDatabase = true;

final datasource:Datasource datasource = check new (initDatabase);
final pubsub:PubSub pubsub = new;
listener http:Listener httpListener = new (9090, timeout = 1000);
final datasource:RedshiftDb redshift = check new;

@display {
    label: "Movie Rating System",
    id: "movie-rating-system"
}
@graphql:ServiceConfig {
    graphiql: {
        enabled: enableGraphiql
    },
    interceptors: new TimeLog(),
    introspection: enableIntrospection,
    maxQueryDepth,
    contextInit: initContext
}
isolated service on new graphql:Listener(httpListener) {

    resource function get random(graphql:Context context) returns string|error {
        return context.get("random").ensureType();
    }

    resource function get movieStream(graphql:Context context, DirectorInputType director) returns Movie[]|error {
        do {
            datasource:Datasource datasource = check context.get(DATASOURCE).ensureType();
            stream<MovieRecord, error?> movieStream = check datasource->getMovies();
            return from MovieRecord movieRecord in movieStream
                select new (movieRecord);
        } on fail error err {
            return err;
        }
    }

    isolated resource function get movies(graphql:Context context, MovieInputType[] inputs) returns MovieRecordType[]|error {
        do {
            time:Utc? st = time:utcNow();
            future<MovieRecordType|error>[] movieRecords = [];
            future<datasource:Director|error>[] directorFutures = [];
            foreach MovieInputType item in inputs {
                future<MovieRecordType|error> mvrt = start self.moviesByIds(context, item.id, item.director.id);
                future<datasource:Director|error> futures = start datasource->getDirectorById(item.director.id);
                directorFutures.push(futures);
                movieRecords.push(mvrt);
            }
            MovieRecordType[] mvs = [];
            DirectorType[] directorTypes = [];
            int i = 0;
            while i < movieRecords.length() {
                MovieRecordType mv = check wait movieRecords[i];
                datasource:Director director = check wait directorFutures[i];
                DirectorType dr = {
                    id: director.id,
                    name: director.name,
                    bio: director.bio
                };
                directorTypes.push(dr);
                mvs.push(mv);
                i += 1;
            }
            time:Utc et = time:utcNow();
            time:Seconds diff = time:utcDiffSeconds(et, <time:Utc>st);
            log:printInfo(string `time ${diff}`);
            return mvs;
        } on fail error err {
            return err;
        }
    }

    # Returns the list of movies in the database.
    # + return - List of movies
    @graphql:ResourceConfig {
        cacheConfig: {
            maxSize: 250
        }
    }
    isolated resource function get moviesByDirector(graphql:Context context, MovieInputType[] inputs) returns MovieRecordType[]|error {
        do {
            time:Utc? st = time:utcNow();
            future<MovieRecordType|error>[] movieRecords = [];
            foreach MovieInputType item in inputs {
                future<MovieRecordType|error> mvrt = start self.moviesByIds(context, item.id, item.director.id);
                movieRecords.push(mvrt);
            }
            MovieRecordType[] mvs = [];
            foreach future<MovieRecordType|error> 'future in movieRecords {
                MovieRecordType mv = check wait 'future;
                mvs.push(mv);
            }
            time:Utc et = time:utcNow();
            time:Seconds diff = time:utcDiffSeconds(et, <time:Utc>st);
            log:printInfo(string `time ${diff}`);
            return mvs;
        } on fail error err {
            return err;
        }
    }

    isolated function moviesByIds(graphql:Context context, string movieId, string directorId) returns MovieRecordType|error {
        do {
            time:Utc? st = time:utcNow();
            datasource:Datasource datasource = check context.get(DATASOURCE).ensureType();
            datasource:Movie movieById = check datasource->getMovieById(movieId);
            datasource:Director directorById = check datasource->getDirectorById(directorId);
            MovieRecordType movieRecordType = {
                id: movieById.id,
                title: movieById.title,
                year: movieById.year,
                description: movieById.description,
                score: movieById.score,
                reviewers: movieById.reviewers,
                director: {
                    id: directorById.id,
                    name: directorById.name,
                    bio: directorById.bio
                }
            };
            time:Utc et = time:utcNow();
            time:Seconds diff = time:utcDiffSeconds(et, <time:Utc>st);
            log:printInfo(string `time ${diff}`);
            return movieRecordType;
        } on fail error err {
            return err;
        }
    }

    @graphql:ResourceConfig {
        cacheConfig: {
            maxSize: 250
        }
    }
    isolated resource function get getMoviesById(graphql:Context context, string[] ids) returns Movie[]|error {
        do {
            time:Utc? st = time:utcNow();
            datasource:Datasource datasource = check context.get(DATASOURCE).ensureType();
            future<datasource:Movie|error>[] movieFutures = [];
            foreach string id in ids {
                future<datasource:Movie|error> futureResult = start datasource->getMovieById(id);
                movieFutures.push(futureResult);
            }
            Movie[] movies = [];
            foreach future<datasource:Movie|error> movieFuture in movieFutures {
                datasource:Movie movie = check wait movieFuture;
                Movie m = new (movie);
                movies.push(m);
            }
            time:Utc et = time:utcNow();
            time:Seconds diff = time:utcDiffSeconds(et, <time:Utc>st);
            log:printInfo(string `time ${diff}`);
            return movies;
        } on fail error err {
            return err;
        }
    }

    # Returns the list of users in the database.
    # + return - List of users
    @graphql:ResourceConfig {
        interceptors: new UserAuthInterceptor()
    }
    isolated resource function get usersStream(graphql:Context context, UserInputType[] userInput) returns User[]|error {
        do {
            time:Utc? st = time:utcNow();
            datasource:Datasource datasource = check context.get(DATASOURCE).ensureType();
            stream<UserRecord, error?> userStream = check datasource->getUsers();
            time:Utc et = time:utcNow();
            time:Seconds diff = time:utcDiffSeconds(et, <time:Utc>st);
            log:printInfo(string `time ${diff}`);
            return from UserRecord userRecord in userStream
                select new (userRecord);
        } on fail error err {
            return err;
        }
    }

    isolated resource function get users(graphql:Context context, UserInputType[] userInput) returns UserRecordType[]|error {
        do {
            time:Utc? st = time:utcNow();
            datasource:Datasource datasource = check context.get(DATASOURCE).ensureType();
            future<UserRecord|error>[] userRecords = [];
            foreach UserInputType item in userInput {
                future<UserRecord|error> userRecord = start datasource->getUser(item.id);
                userRecords.push(userRecord);
            }
            UserRecordType[] userRecordTypes = [];
            foreach future<UserRecord|error> item in userRecords {
                UserRecord user = check wait item;
                UserRecordType urt = {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    roles: user.roles
                };
                userRecordTypes.push(urt);
            }
            time:Utc et = time:utcNow();
            time:Seconds diff = time:utcDiffSeconds(et, <time:Utc>st);
            log:printInfo(string `time ${diff}`);
            return userRecordTypes;
        } on fail error err {
            return err;
        }
    }

    # Returns the list of directors in the database.
    # + return - List of directors
    resource function get directorsStream(graphql:Context context, DirectorInputType[] directorInputs) returns Director[]|error {
        do {
            time:Utc? st = time:utcNow();
            datasource:Datasource datasource = check context.get(DATASOURCE).ensureType();
            stream<DirectorRecord, error?> directorStream = check datasource->getDirectors();
            DirectorRecord[] directors = check from DirectorRecord directorRecord in directorStream
                select directorRecord;
            Director[] drs = [];
            foreach DirectorRecord dr in directors {
                transaction {
                    drs.push(new Director(dr));
                    check commit;
                }
            }
            time:Utc et = time:utcNow();
            time:Seconds diff = time:utcDiffSeconds(et, <time:Utc>st);
            log:printInfo(string `time ${diff}`);
            return drs;
        } on fail error err {
            return err;
        }
    }

    resource function get directors(graphql:Context context, DirectorInputType[] directors) returns DirectorType[]|error {
        do {
            time:Utc? st = time:utcNow();
            datasource:Datasource datasource = check context.get(DATASOURCE).ensureType();
            future<datasource:Director|error>[] directorFutures = [];
            foreach DirectorInputType item in directors {
                future<datasource:Director|error> futures = start datasource->getDirectorById(item.id);
                directorFutures.push(futures);
            }
            DirectorType[] directorTypes = [];
            foreach future<datasource:Director|error> item in directorFutures {
                datasource:Director director = check wait item;
                DirectorType dr = {
                    id: director.id,
                    name: director.name,
                    bio: director.bio
                };
                directorTypes.push(dr);
            }
            time:Utc et = time:utcNow();
            time:Seconds diff = time:utcDiffSeconds(et, <time:Utc>st);
            log:printInfo(string `time ${diff}`);
            return directorTypes;
        } on fail error err {
            return err;
        }
    }

    # Returns the Director with the given ID.
    # + id - The ID of the director
    # + return - The director with the given ID
    resource function get director(graphql:Context context, @graphql:ID string id) returns Director|error {
        do {
            time:Utc? st = time:utcNow();
            datasource:Datasource datasource = check context.get(DATASOURCE).ensureType();
            DirectorRecord|error directorRecord = datasource->getDirector(id);
            if directorRecord is error {
                return error("Director not found");
            }
            time:Utc et = time:utcNow();
            time:Seconds diff = time:utcDiffSeconds(et, <time:Utc>st);
            log:printInfo(string `time ${diff}`);
            return new (directorRecord);
        } on fail error err {
            return err;
        }
    }

    isolated resource function get getAllUsers(int[] ids) returns UserSummaryService[]|error {
        UserInfoType[] futureResults = [];
        foreach int id in ids {
            future<datasource:UserInfo[]|error> futureResult = start redshift.getUsers(id);
            UserInfoType userInfo = {
                id: id,
                userInfo: futureResult
            };
            futureResults.push(userInfo);
        }
        UserSummaryService[] results = [];
        foreach UserInfoType userInfo in futureResults {
            datasource:UserInfo[] result = check wait userInfo.userInfo;
            results.push(new (userInfo.id, result));
        }
        return results;
    }

    isolated resource function get getUsers(int[] ids) returns UserDetails[]|error {
        future<datasource:UserInfo[]|error>[] futureResults = [];
        foreach int id in ids {
            future<datasource:UserInfo[]|error> futureResult = start redshift.getUsers(id);
            futureResults.push(futureResult);
        }
        UserDetails[] results = [];
        foreach future<datasource:UserInfo[]|error> 'future in futureResults {
            datasource:UserInfo[] result = check wait 'future;
            results.push(...createUserDetails(result));
        }
        return results;
    }

    resource function get getUser(UserInput[] user) returns UserDetails[]|error {
        [future<string|error>, future<string|error>][] names = [];
        foreach int i in 0 ..< user.length() {
            future<string|error> name = start redshift.getUserById(user[i].id);
            future<string|error> email = start redshift.getEmailByName(user[i].email);
            names.push([name, email]);
        }
        UserDetails[] uda = [];
        foreach [future<string|error>, future<string|error>] [name, email] in names {
            string n = check wait name;
            string e = check wait email;
            uda.push({name: n, email: e});
        }
        return uda;
    }

    resource function get getUsernamById(int[] ids) returns string[]|error {
        transaction {
            string[] names = [];
            foreach int item in ids {
                string name = check redshift.getUserById(item);
                names.push(name);
            }
            check commit;
            return names;
        }
    }

    resource function get getUserInfo() returns UserDetails?[]|error {
        record {}[] results = check redshift.getUserInfo();
        UserDetails[] ud = [];
        foreach record {} item in results {
            ud.push({...item});
        }
        return ud;
    }

    # Adds a new review to the database.
    # + context - The GraphQL context
    # + reviewInput - The input values for the review
    # + return - The added review
    @graphql:ResourceConfig {
        interceptors: new UserAuthInterceptor()
    }
    remote function addReview(graphql:Context context, ReviewInput reviewInput) returns Review|error {
        datasource:Datasource datasource = check context.get(DATASOURCE).ensureType();
        string userId = check getUserIdFromContext(context);
        ReviewRecord reviewRecord = {
            id: uuid:createType4AsString(),
            userId,
            ...reviewInput
        };
        ReviewRecord|error result = datasource->addReview(reviewRecord);
        if result is error {
            log:printError("Failed to add the review", result);
            return error("Failed to add the review");
        }
        check context.invalidate("reviews");
        return new (result);
    }

    # Adds a new movie to the database.
    # + context - The GraphQL context
    # + movieInput - The input values for the movie
    # + return - The added movie
    @graphql:ResourceConfig {
        interceptors: new UserAuthInterceptor()
    }
    remote function addMovie(graphql:Context context, MovieInput movieInput) returns Movie|error {
        datasource:Datasource datasource = check context.get(DATASOURCE).ensureType();
        MovieRecord movieRecord = {
            id: uuid:createType4AsString(),
            ...movieInput
        };
        MovieRecord|error result = datasource->addMovie(movieRecord);
        if result is error {
            log:printError("Failed to add the movie", result);
            return error("Failed to add the movie");
        }
        Movie movie = new (result);
        check pubsub.publish(MOVIE_TOPIC, movie, -1);
        check context.invalidate("movies");
        return movie;
    }

    # Adds a new director to the database.
    # + context - The GraphQL context
    # + directorInput - The input values for the director
    # + return - The added director
    @graphql:ResourceConfig {
        interceptors: new UserAuthInterceptor()
    }
    remote function addDirector(graphql:Context context, DirectorInput directorInput) returns Director|error {
        datasource:Datasource datasource = check context.get(DATASOURCE).ensureType();
        DirectorRecord directorRecord = {
            id: uuid:createType4AsString(),
            ...directorInput
        };
        DirectorRecord|error result = datasource->addDirector(directorRecord);
        if result is error {
            log:printError("Failed to add the director", result);
            return error("Failed to add the director");
        }
        check context.invalidate("directors");
        return new (result);
    }
}
