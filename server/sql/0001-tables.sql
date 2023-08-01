CREATE TABLE tournament (
    tournament_key      int             NOT NULL AUTO_INCREMENT,
    name                varchar(128)    NULL,
    description         varchar(1024)   NULL,

    PRIMARY KEY (tournament_key)
);


INSERT INTO tournament (name, description) VALUES ('Game name', 'Tournament description');