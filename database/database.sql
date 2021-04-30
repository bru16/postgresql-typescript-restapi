CREATE DATABASE typescript;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    email TEXT
);

INSERT INTO
    users (name, email)
VALUES
    ('Bruno', 'Bruno@hotmail.com'),
    ('Jose', 'Jose@hotmail.com');