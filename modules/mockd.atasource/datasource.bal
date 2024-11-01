import ballerina/io;
import ballerina/log;
import ballerina/lang.runtime;

configurable decimal simulatedNetworkDelay = 1;

public isolated client class Datasource {
    private final table<User> users = table [];
    private final table<Director> directors = table [];
    private final table<Review> reviews = table [];
    private final table<Movie> key(id) movies = table [];

    public isolated function init(boolean initDatabase = false) returns error? {
        if initDatabase {
            check self.initDatabase();
        }
    }

    isolated function initDatabase() returns error? {
        check self->initDirectors();
        check self->initUsers();
        check self->initReviews();
        check self->initMovies();
    }

    isolated remote function initMovies() returns error? {
        json moviesData = check io:fileReadJson("resources/db/movies.json");
        if moviesData !is map<json> {
            return error("Error in reading movies.json");
        }
        Movie[] movies = check moviesData["movies"].fromJsonWithType();
        movies.forEach(d => self.movies.add(d));

    }

    isolated remote function initDirectors() returns error? {
        json directorsData = check io:fileReadJson("resources/db/directors.json");
        if directorsData !is map<json> {
            return error("Error in reading directors.json");
        }
        Director[] directors = check directorsData["directors"].fromJsonWithType();
        directors.forEach(d => self.directors.add(d));
    }

    isolated remote function initUsers() returns error? {
        json usersData = check io:fileReadJson("resources/db/users.json");
        if usersData !is map<json> {
            return error("Error in reading users.json");
        }
        User[] users = check usersData["users"].fromJsonWithType();
        users.forEach(d => self.users.add(d));
    }

    isolated remote function initReviews() returns error? {
        json reviewsData = check io:fileReadJson("resources/db/reviews.json");
        if reviewsData !is map<json> {
            return error("Error in reading reviews.json");
        }
        Review[] reviews = check reviewsData["reviews"].fromJsonWithType();
        reviews.forEach(d => self.reviews.add(d));

    }

    isolated remote function getMovies() returns stream<Movie, error?>|error {
        runtime:sleep(simulatedNetworkDelay);
        lock {
            return self.movies.toArray().clone().toStream();
        }
    }

    isolated remote function getMovieById(string id) returns Movie|error {
        runtime:sleep(simulatedNetworkDelay);
        lock {
            Movie[] movie = from Movie m in self.movies
                where m.id == id
                select m;
            if (movie.length() == 0) {
                return error(string `Movie not found for the id: ${id}`);
            }
            return movie[0].clone();
        }
    }

    isolated remote function addMovie(Movie movie) returns Movie|error {
        runtime:sleep(simulatedNetworkDelay);
        lock {
            self.movies.add(movie.clone());
        }
        return movie;
    }

    isolated remote function getDirectors() returns stream<Director, error?>|error {
        runtime:sleep(simulatedNetworkDelay);
        lock {
            return self.directors.toArray().clone().toStream();
        }
    }

    isolated remote function getDirector(string id) returns Director|error {
        runtime:sleep(simulatedNetworkDelay);
        lock {
            Director[] directorsWithId = from Director director in self.directors
                where director.id == id
                select director;
            if (directorsWithId.length() == 0) {
                return error(string `Director not found for the id: ${id}`);
            }
            return directorsWithId[0].clone();
        }
    }

    isolated remote function getDirectorById(string id) returns Director|error {
        runtime:sleep(simulatedNetworkDelay);
        lock {
            Director[] directorsWithId = from Director director in self.directors
                where director.id == id
                select director;
            if (directorsWithId.length() == 0) {
                return error(string `Director not found for the id: ${id}`);
            }
            return directorsWithId[0].clone();
        }
    }

    isolated remote function getDirectorsById(string[] ids) returns stream<Director, error?>|error {
        runtime:sleep(simulatedNetworkDelay);
        lock {
            Director[] directors = from Director director in self.directors
                where ids.indexOf(director.id) != ()
                select director;
            return directors.clone().toStream();
        }

    }

    isolated remote function addDirector(Director director) returns Director|error {
        runtime:sleep(simulatedNetworkDelay);
        lock {
            self.directors.add(director.clone());
        }
        return director;
    }

    isolated remote function getUsers() returns stream<User, error?>|error {
        runtime:sleep(simulatedNetworkDelay);
        lock {
            return self.users.toArray().clone().toStream();
        }
    }

    isolated remote function getUser(string id) returns User|error {
        runtime:sleep(simulatedNetworkDelay);
        lock {
            User[] userWithId = from User user in self.users
                where user.id == id
                select user;
            if (userWithId.length() == 0) {
                return error(string `User not found for the id: ${id}`);
            }
            return userWithId[0].clone();
        }
    }

    isolated remote function addReview(Review review) returns Review|error {
        runtime:sleep(simulatedNetworkDelay);
        lock {
            if (self.movies.hasKey(review.movieId)) {
                return error(string `Failed to add the review`);
            }
            Movie movie = self.movies.get(review.movieId);
            int score = movie.score + review.score;
            int reviewers = movie.reviewers + 1;
            Movie updatedMovie = {...movie};
            updatedMovie.score = score;
            updatedMovie.reviewers = reviewers;
            self.movies.put(updatedMovie);
        }
        lock {
            self.reviews.add(review.clone());
        }
        return review;
    }
}

isolated function logWarn(string message) {
    log:printInfo(string `[WARN]: ${message}`);
}

isolated function logError(string message, error err) {
    log:printError(string `[ERROR]: ${message}`, err);
}
