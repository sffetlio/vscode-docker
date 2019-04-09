create table users
(
    id   int auto_increment
        primary key,
    name varchar(100) charset utf8 null,
    age  int                       null
);

INSERT INTO node_test.users (id, name, age) VALUES (1, 'Test', 100);
INSERT INTO node_test.users (id, name, age) VALUES (2, 'Test2', 2);