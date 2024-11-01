// import movie_rating_system.mock.datasource;
import movie_rating_system.datasource;

import ballerina/graphql;
import ballerina/http;
import ballerina/lang.value;
import ballerina/log;

const string DATASOURCE = "datasource";
const string USER = "user";
const string USER_ID = "userId";

isolated function loadDirectors(readonly & anydata[] ids) returns DirectorRecord[]|error {
    string[] keys = check ids.ensureType();
    stream<DirectorRecord, error?> directorStream = check datasource->getDirectorsById(keys);
    DirectorRecord[] directors = check from DirectorRecord director in directorStream
        select director;

    DirectorRecord[] result = [];
    foreach [int, string] [i, id] in keys.enumerate() {
        foreach DirectorRecord director in directors {
            if id == director.id {
                result[i] = director;
                break;
            }
        }
    }
    return result;
}

isolated function validateUserRole(graphql:Context context, string expectedRole) returns error? {
    UserRecord? user = check context.get(USER).ensureType();
    if user is () {
        return error("Authentication error: Invalid user");
    }
    if user.roles.indexOf(expectedRole) !is int {
        return error("Authorization error: Insufficient permissions");
    }
}

isolated function initContext(http:RequestContext requestContext, http:Request request) returns graphql:Context|error {
    log:printInfo("Reqeust recieved");
    graphql:Context context = new;
    context.set(DATASOURCE, datasource);

    string|http:HeaderNotFoundError userId = request.getHeader(USER_ID);
    if userId is http:HeaderNotFoundError {
        log:printWarn("User not logged in");
        context.set(USER, "anonymous");
        context.set(USER_ID, "1");
    } else {
        UserRecord|error user = datasource->getUser(userId);
        if user is error {
            log:printError("User not found", user);
            return error("User not found");
        }
        context.set(USER, user);
        context.set(USER_ID, userId);
    }
    string random = check request.getHeader("random");
    context.set("random", random);
    return context;
}

isolated function getUserIdFromContext(graphql:Context context) returns string|error {
    string|error userId = context.get(USER_ID).ensureType();
    if userId is error {
        return error("User is not logged in");
    }
    return userId;
}

type LoginContext record {
    string userId;
    string user;
    string dataSource;
};

isolated function getStringContextValue(graphql:Context ctx, string key) returns string|error {
    value:Cloneable|isolated object {} val = check ctx.get(key);
    if val is string {
        return val;
    } else if val is UserRecord {
        return val.id;
    }
    return error(string `${key} Value not found!`);
}

isolated function createUserDetails(datasource:UserInfo[] result) returns UserDetails[] {
    UserDetails[] userDetails = [];
    UserDetails[] userArr = [];
    if result.length() == 0 {
        return userDetails;
    }
    string[] names = from datasource:UserInfo user in result
        select user.name;

    foreach string user in names {
        UserDetails[] users = from var {id, name, email, age} in result
            where name == user
            select {id, name, email, age};
        userArr.push(...users);
    }
    return userArr;
}
