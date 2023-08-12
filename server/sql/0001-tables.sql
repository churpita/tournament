CREATE TABLE event (
    event_key               int             NOT NULL AUTO_INCREMENT,
    name                    varchar(128)    NOT NULL,

    PRIMARY KEY (event_key)
);

CREATE TABLE team (
    team_key                int             NOT NULL AUTO_INCREMENT,
    event_key               int             NOT NULL,
    name                    varchar(64)     NOT NULL,
    captain_name            varchar(128)    NOT NULL,
    
    PRIMARY KEY (team_key),
    FOREIGN KEY (event_key) REFERENCES event(event_key)
);

CREATE TABLE game (
    game_key                int             NOT NULL AUTO_INCREMENT,
    name                    varchar(128)    NOT NULL,

    PRIMARY KEY (game_key)
);

CREATE TABLE tournament (
    tournament_key          int             NOT NULL AUTO_INCREMENT,
    name                    varchar(128)    NOT NULL,
    game_key                int             NOT NULL,
    description             varchar(1024)   NULL,

    PRIMARY KEY (tournament_key),
    FOREIGN KEY (game_key) REFERENCES game(game_key)
);

-- Foreign key tables

-- Consider this table the actual bracket nodes
CREATE TABLE tournament_match (
    tournament_match_key    int             NOT NULL AUTO_INCREMENT,
    tournament_key          int             NOT NULL,
    previous_match_key      int             NULL,
    round                   int             NULL,
    winner_team_key         int             NULL,
    
    PRIMARY KEY (tournament_match_key),
    FOREIGN KEY (tournament_key) REFERENCES tournament(tournament_key),
    FOREIGN KEY (previous_match_key) REFERENCES tournament_match(tournament_match_key)
);

-- Consider this table the participants of any given match
CREATE TABLE tournament_match_participant (
    tournament_match_key    int             NOT NULL,
    team_key                int             NOT NULL,
    
    PRIMARY KEY (tournament_match_key, team_key),
    FOREIGN KEY (tournament_match_key) REFERENCES tournament_match(tournament_match_key),
    FOREIGN KEY (team_key) REFERENCES team(team_key)
);