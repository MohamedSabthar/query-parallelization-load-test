type MovieInputType record {|
    string id;
    string title;
    int year;
    string description;
    int reviewers;
    DirectorInputType director;
|};

type DirectorInputType record {|
    string id;
    string name;
    string bio;
|};

type MovieRecordType record {|
    string id;
    string title;
    int year;
    string description;
    int score;
    int reviewers;
    DirectorType director;
|};

type DirectorType record {|
    string id;
    string name;
    string bio;
    string movies?;
|};

type UserInputType record {|
    string id;
|};

type UserRecordType record {|
    string id;
    string name;
    string email;
    string[] roles;
|};
