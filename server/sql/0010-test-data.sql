INSERT INTO event (name) VALUES ('LAN Party Winter 2024');
INSERT INTO event (name) VALUES ('LAN Party Summer 2024');
INSERT INTO event (name) VALUES ('LAN Party Winter 2025');

INSERT INTO team (event_key, name, captain_name) VALUES (1, 'Team Alpha', 'Alpha');
INSERT INTO team (event_key, name, captain_name) VALUES (1, 'Team Bravo', 'Bravo');
INSERT INTO team (event_key, name, captain_name) VALUES (1, 'Team Charlie', 'Charlie');
INSERT INTO team (event_key, name, captain_name) VALUES (1, 'Team Delta', 'Delta');

INSERT INTO game (name) VALUES ('Test Video Game 1');
INSERT INTO game (name) VALUES ('Test Video Game 2');

INSERT INTO tournament(name, game_key, description) VALUES ('VG1 Tournament', 1, 'Single Elimination Test');
INSERT INTO tournament(name, game_key, description) VALUES ('VG2 Tournament', 2, 'Double Elimination Test');

-- Round 1 (Semi Finals)
INSERT INTO tournament_match(tournament_key, round, winner_team_key) VALUES (1, 1, 2); -- 1: Bravo wins against Alpha
INSERT INTO tournament_match_participant (tournament_match_key, team_key) VALUES (1, 1);
INSERT INTO tournament_match_participant (tournament_match_key, team_key) VALUES (1, 2);

INSERT INTO tournament_match(tournament_key, round, winner_team_key) VALUES (1, 1, 3); -- 2: Charlie wins against Delta
INSERT INTO tournament_match_participant (tournament_match_key, team_key) VALUES (2, 3);
INSERT INTO tournament_match_participant (tournament_match_key, team_key) VALUES (2, 4);

-- Round 2 (Finals)
INSERT INTO tournament_match(tournament_key, round, winner_team_key) VALUES (1, 2, 2); -- Charlie wins against Bravo
INSERT INTO tournament_match_participant (tournament_match_key, team_key) VALUES (3, 2);
INSERT INTO tournament_match_participant (tournament_match_key, team_key) VALUES (3, 3);

-- This usually wouldn't be done this late. The idea is that all tournament_match entries are
-- created first, and then tournament_match_participant entries are filled into those matches.
-- Since next_match_key is a FK, future matches must be set up in advance.
UPDATE tournament_match SET next_match_key = 3 WHERE tournament_match_key IN (1,2);