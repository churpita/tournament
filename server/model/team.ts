export interface Team {
    // Unique identifier for any given team
    team_key: number;
    // Unique identifier for the event this team was created for
    event_key: number;
    // The name of the team
    name: string;
    // The name of the captain. Ideally, this should be as close to a discord name as possible in case that person needs to be contacted
    captain_name: string;
};