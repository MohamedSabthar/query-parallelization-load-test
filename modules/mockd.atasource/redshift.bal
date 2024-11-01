import ballerina/lang.runtime;

final string & readonly jdbcUrl = "jdbc:postgresql://localhost:5432/postgres?ssl=false";
final string & readonly user = "postgres";
final string & readonly redshiftPassword = "password";

public type UserInfo record {
    readonly int id;
    string name;
    string email;
    int age;
};

public isolated class RedshiftDb {
    private final table<UserInfo> key(id) users = table [];

    public isolated function init() returns error? {
        lock {
            self.users.add({id: 1, name: "JohnDoe", email: "john.doe@example.com", age: 25});
            self.users.add({id: 2, name: "JaneSmith", email: "jane.smith@example.com", age: 30});
            self.users.add({id: 3, name: "BobJohnson", email: "bob.johnson@example.com", age: 22});
        }

    }

    public isolated function getUserById(int userId) returns string|error {
        runtime:sleep(simulatedNetworkDelay);
        lock {
            return self.users.get(userId).name;
        }
    }

    public isolated function getEmailByName(string name) returns string|error {
        runtime:sleep(simulatedNetworkDelay);
        lock {
            return self.users.toArray().filter(u => u.name == name)[0].email;
        }
    }

    public isolated function getUsers(int userId) returns UserInfo[]|error {
        runtime:sleep(simulatedNetworkDelay);
        lock {
            return self.users.toArray().clone().filter(u => u.id == userId);
        }

    }

    public isolated function getAllUsers() returns UserInfo[]|error {
        runtime:sleep(simulatedNetworkDelay);
        lock {
            return self.users.clone().toArray();
        }

    }

    public isolated function getUserInfo() returns record {}[]|error {
        runtime:sleep(simulatedNetworkDelay);
        lock {
            return self.users.clone().toArray();
        }
    }
}
