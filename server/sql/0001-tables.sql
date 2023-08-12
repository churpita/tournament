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

CREATE TABLE matchup (
    matchup_key             int             NOT NULL AUTO_INCREMENT,
    winner_team_key         int             NULL,
    
    PRIMARY KEY (matchup_key),
    FOREIGN KEY (winner_team_key) REFERENCES team(team_key)
);

-- Foreign key tables

-- Consider this table the actual bracket nodes
CREATE TABLE tournament_match (
    tournament_match_key    int             NOT NULL AUTO_INCREMENT,
    tournament_key          int             NOT NULL,
    matchup_key             int             NOT NULL,
    previous_matchup_key    int             NULL,
    round                   int             NULL,
    seed                    int             NULL,
    
    PRIMARY KEY (tournament_match_key),
    FOREIGN KEY (tournament_key) REFERENCES tournament(tournament_key),
    FOREIGN KEY (matchup_key) REFERENCES matchup(matchup_key),
    FOREIGN KEY (previous_matchup_key) REFERENCES matchup(matchup_key)
);

-- Consider this table the participants of any given match
CREATE TABLE matchup_participant (
    matchup_participant_key int             NOT NULL AUTO_INCREMENT,
    matchup_key             int             NOT NULL,
    team_key                int             NOT NULL,
    
    PRIMARY KEY (matchup_participant_key),
    FOREIGN KEY (matchup_key) REFERENCES matchup(matchup_key),
    FOREIGN KEY (team_key) REFERENCES team(team_key)
);