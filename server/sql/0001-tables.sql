CREATE TABLE tournament (
    tournament_key          int             NOT NULL AUTO_INCREMENT,
    name                    varchar(128)    NOT NULL,
    description             varchar(1024)   NULL,
    PRIMARY KEY (tournament_key)
);

CREATE TABLE match (
    match_key               int             NOT NULL AUTO_INCREMENT,
    winner_team_key         int             NULL,
    PRIMARY KEY (match_key)
);

CREATE TABLE team (
    team_key                int             NOT NULL AUTO_INCREMENT,
    name                    varchar(64)     NOT NULL,
    PRIMARY KEY (team_key)
);

-- Foreign key tables

-- Consider this table the actual bracket nodes
CREATE TABLE tournament_match (
    tournament_match_key    int             NOT NULL AUTO_INCREMENT,
    tournament_key          int             NOT NULL,
    match_key               int             NOT NULL,
    previous_match_key      int             NULL,
    round                   int             NULL,
    seed                    int             NULL,

    PRIMARY KEY (tournament_match_key),
    FOREIGN KEY (tournament_key) REFERENCES tournament(tournament_key),
    FOREIGN KEY (match_key) REFERENCES match(match_key),
    FOREIGN KEY (previous_match_key) REFERENCES match(match_key)
);

-- Consider this table the participants of any given match
CREATE TABLE match_team (
    match_key               int             NOT NULL,
    team_key                int             NOT NULL,

    PRIMARY KEY (match_key, team_key),
    FOREIGN KEY (match_key) REFERENCES match(match_key),
    FOREIGN KEY (team_key) REFERENCES team(team_key)
);