import { Request, Response } from 'express';

import { db } from '../util/database';
import { SqlUtils } from '../util/sqlutils';

export const getMatchup = async (req: Request, res: Response) => {
    try {
        let parameters = [
            {column_name: 'matchup_key', value: req.body.matchup_key},
            {column_name: 'winner_team_key', value: req.body.winner_team_key}
        ];

        let query = `SELECT * FROM matchup WHERE 1=1 `;
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

export const addMatchup = async (req: Request, res: Response) => {
    try {
        const { winner_team_key } = req.body;

        await db.execute(`
            INSERT INTO matchup
            (
                winner_team_key
            )
            VALUES
            (
                ?
            )
        `, [winner_team_key]);

        res.status(200).json({
            success: true,
            message: `Successfully added new matchup`,
            data: {
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

export const updateMatchup = async (req: Request, res: Response) => {
    try {
        const { matchup_key, winner_team_key } = req.body;

        if (matchup_key == null) {
            throw new ReferenceError('A required request parameter is missing.');
        }

        await db.execute(`
            UPDATE matchup
            SET 
                winner_team_key = ?
            WHERE matchup_key = ?
        `, [winner_team_key, matchup_key]);

        res.status(200).json({
            success: true,
            message: `Successfully updated matchup ${matchup_key}`,
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

export const deleteMatchup = async (req: Request, res: Response) => {
    try {
        const { matchup_key } = req.body;

        if (matchup_key == null) {
            throw new ReferenceError('A required request parameter is missing.');
        }

        await db.execute(`DELETE FROM matchup WHERE matchup_key = ?`, [matchup_key]);

        res.status(200).json({
            success: true,
            message: `Successfully deleted matchup ${matchup_key}`,
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