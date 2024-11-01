import ballerina/log;
import ballerina/sql;

import ballerinax/aws.redshift;
import ballerinax/postgresql.driver as _;

final string & readonly jdbcUrl = "jdbc:postgresql://localhost:5432/postgres?ssl=false";
final string & readonly user = "postgres";
final string & readonly redshiftPassword = "password";

public type UserInfo record {
    @sql:Column {
        name: "user_id"
    }
    int id;
    @sql:Column {
        name: "username"
    }
    string name;
    string email;
    int age;
};

public isolated class RedshiftDb {
    final redshift:Client dbClient;
    public isolated function init() returns error? {
        self.dbClient =check new (jdbcUrl, user, redshiftPassword);
        log:printInfo("Setting up tables");
        _ = check self.dbClient->execute(`
            CREATE TABLE IF NOT EXISTS NumericTypes (
            row_id SERIAL PRIMARY KEY,
            int_type INTEGER,
            bigint_type BIGINT,
            double_type DOUBLE PRECISION
        )`);
        _ = check self.dbClient->execute(`
            CREATE TABLE IF NOT EXISTS CharacterTypes (
            row_id SERIAL PRIMARY KEY,
            char_type CHAR(15),
            varchar_type VARCHAR(20)
        )`);
        _ = check self.dbClient->execute(`
            CREATE OR REPLACE FUNCTION NumericProcedure(
                row_id_in BIGINT,
                int_type_in INTEGER,
                bigint_type_in BIGINT,
                double_type_in DOUBLE PRECISION
            )
            RETURNS VOID LANGUAGE plpgsql AS $$
            BEGIN
                INSERT INTO NumericTypes (
                    row_id, int_type, bigint_type, double_type
                )
                VALUES (
                    row_id_in, int_type_in, bigint_type_in, double_type_in
                );
            END;
            $$;`);
        _ = check self.dbClient->execute(`
            CREATE TABLE IF NOT EXISTS users (
            user_id INT,
            username VARCHAR(255),
            email VARCHAR(255),
            age INT
        );`);

        _ = check self.dbClient->execute(`
            INSERT INTO users (user_id, username, email, age) VALUES
            (1, 'JohnDoe', 'john.doe@example.com', 25),
            (2, 'JaneSmith', 'jane.smith@example.com', 30),
            (3, 'BobJohnson', 'bob.johnson@example.com', 22);`);

        _ = check self.dbClient->execute(`
            CREATE OR REPLACE FUNCTION GetUserInfo(OUT curName refcursor)
            LANGUAGE plpgsql
            AS $$
            BEGIN
                OPEN curName FOR
                SELECT user_id, username, email, age
                FROM users;
            END;
            $$;`);
    }

    public isolated function getUserById(int userId) returns string|error {
        transaction {
            sql:ParameterizedQuery sqlQuery = `SELECT username FROM users WHERE user_id = ${userId};`;
            string|error result = self.dbClient->queryRow(sqlQuery);
            check commit;
            return result;
        }
    }

    public isolated function getEmailByName(string name) returns string|error {
        transaction {
            sql:ParameterizedQuery sqlQuery = `SELECT email FROM users WHERE username = ${name};`;
            string|error result = self.dbClient->queryRow(sqlQuery);
            check commit;
            return result;
        }
    }

    public isolated function getUsers(int userId) returns UserInfo[]|error {
        sql:ParameterizedQuery sqlQuery = buildQueryOverTime();
        sqlQuery = `SELECT * FROM users WHERE user_id = ${userId};`;
        stream<UserInfo, sql:Error?> query = self.dbClient->query(sqlQuery);
        UserInfo[] result = check from UserInfo user in query select user;
        return result;
    }

    public isolated function getAllUsers() returns UserInfo[]|error {
        sql:ParameterizedQuery sqlQuery = `SELECT * FROM users;`;
        stream<UserInfo, sql:Error?> query = self.dbClient->query(sqlQuery);
        UserInfo[] result = check from UserInfo user in query select user;
        return result;
    }

    public isolated function getUserInfo() returns record {}[]|error {
        transaction {
            sql:CursorOutParameter mycursor = new ();
            _ = check self.dbClient->call(`{CALL GetUserInfo(${mycursor})}`);
            stream<record {}, sql:Error?> resultSet = mycursor.get();
            record {}[] resultArray = check from record {} user in resultSet
                select user;
            check commit;
            return resultArray;
        }
    }
}

isolated function buildQueryOverTime() returns sql:ParameterizedQuery {
    sql:ParameterizedQuery query1 = `SELECT * FROM user WHERE age > ?`;
    sql:ParameterizedQuery query2 = `SELECT * FROM user WHERE age < ?`;
    sql:ParameterizedQuery query3 = `SELECT * FROM user WHERE age = ?`;
    return sql:queryConcat(query1, query2, query3);
}
