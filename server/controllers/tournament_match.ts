import { Request, Response } from 'express';

import { db } from '../util/database';
import { SqlUtils } from '../util/sqlutils';

export const getTournamentMatch = async (req: Request, res: Response) => {
    try {
        let parameters = [
            {column_name: 'tournament_match_key', value: req.body.tournament_match_key},
            {column_name: 'tournament_key', value: req.body.tournament_key},
            {column_name: 'previous_match_key', value: req.body.previous_match_key},
            {column_name: 'round', value: req.body.round},
            {column_name: 'winner_team_key', value: req.body.winner_team_key}
        ];

        let query = `SELECT * FROM tournament_match WHERE 1=1 `;
        query = SqlUtils.AddWhereClauses(query, parameters);

        let results = await db.execute(query, parameters.filter(p => p.value != undefined).map(p => {return p.value;}));
        results = results[0];

        res.status(200).json({
            success: true,
            message: null,
            data: {
                results
            }
        })
    } 
    catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Sorry, an error occurred.",
            data: null,
        });
    }
}

export const addTournamentMatch = async (req: Request, res: Response) => {
    try {
        const { tournament_key, previous_match_key, round, winner_team_key } = req.body;

        if (tournament_key == null) {
            throw new ReferenceError('A required request parameter is missing.');
        }

        await db.execute(`
            INSERT INTO tournament_match
            (    
                tournament_key,
                previous_match_key,
                round,
                winner_team_key
            )
            VALUES
            (
                ?,
                ?,
                ?,
                ?
            )
        `, [tournament_key, previous_match_key, round, winner_team_key]);

        res.status(200).json({
            success: true,
            message: `Successfully added tournament match`,
            data: {
                tournament_key: tournament_key,
                previous_match_key: previous_match_key,
                round: round,
                winner_team_key: winner_team_key
            }
        })
    } 
    catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Sorry, an error occurred.",
            data: null,
        });
    }
}

export const updateTournamentMatch = async (req: Request, res: Response) => {
    try {
        const { tournament_match_key, tournament_key, previous_match_key, round, winner_team_key } = req.body;

        if (tournament_match_key == null || tournament_key == null) {
            throw new ReferenceError('A required request parameter is missing.');
        }

        await db.execute(`
            UPDATE tournament_match
            SET 
                tournament_key = ?,
                previous_match_key = ?,
                round = ?,
                winner_team_key = ?
            WHERE tournament_match_key = ?
        `, [tournament_key, previous_match_key, round, winner_team_key, tournament_match_key]);

        res.status(200).json({
            success: true,
            message: `Successfully updated tournament match ${tournament_match_key}`,
            data: null
        })
    } 
    catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Sorry, an error occurred.",
            data: null,
        });
    }
}

export const deleteTournamentMatch = async (req: Request, res: Response) => {
    try {
        const { tournament_match_key } = req.body;

        if (tournament_match_key == null) {
            throw new ReferenceError('A required request parameter is missing.');
        }

        await db.execute(`DELETE FROM tournament_match WHERE tournament_match_key = ?`, [tournament_match_key]);

        res.status(200).json({
            success: true,
            message: `Successfully deleted tournament match ${tournament_match_key}`,
            data: null
        })
    } 
    catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Sorry, an error occurred.",
            data: null,
        });
    }
}
