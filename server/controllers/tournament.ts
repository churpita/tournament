import { Request, Response } from 'express';

import { db } from '../util/database';
import { SqlUtils } from '../util/sqlutils';

export const getTournament = async (req: Request, res: Response) => {
    try {
        let parameters = [
            {column_name: 'tournament_key', value: req.body.tournament_key},
            {column_name: 'event_key', value: req.body.event_key},
            {column_name: 'name', value: req.body.name},
            {column_name: 'game_key', value: req.body.game_key},
            {column_name: 'description', value: req.body.description}
        ];

        let query = `SELECT * FROM tournament WHERE 1=1 `;
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

export const addTournament = async (req: Request, res: Response) => {
    try {
        const { event_key, name, game_key, description } = req.body;

        if (event_key == null || name == null || game_key == null) {
            throw new ReferenceError('A required request parameter is missing.');
        }

        await db.execute(`
            INSERT INTO tournament
            (
                event_key,
                name,
                game_key,
                description
            )
            VALUES
            (
                ?,
                ?,
                ?,
                ?
            )
        `, [event_key, name, game_key, description]);

        res.status(200).json({
            success: true,
            message: `Successfully added tournament ${name}`,
            data: {
                event_key: event_key,
                name: name,
                game_key: game_key,
                description: description
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

export const updateTournament = async (req: Request, res: Response) => {
    try {
        const { tournament_key, event_key, name, game_key, description } = req.body;

        if (tournament_key == null || event_key == null || name == null || game_key == null) {
            throw new ReferenceError('A required request parameter is missing.');
        }

        await db.execute(`
            UPDATE tournament
            SET 
                event_key = ?,
                name = ?,
                game_key = ?,
                description = ?
            WHERE tournament_key = ?
        `, [event_key, name, game_key, description, tournament_key]);

        res.status(200).json({
            success: true,
            message: `Successfully updated ${name}`,
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

export const deleteTournament = async (req: Request, res: Response) => {
    try {
        const { tournament_key } = req.body;

        if (tournament_key == null) {
            throw new ReferenceError('A required request parameter is missing.');
        }

        await db.execute(`DELETE FROM tournament WHERE tournament_key = ?`, [tournament_key]);

        res.status(200).json({
            success: true,
            message: `Successfully deleted tournament ${tournament_key}`,
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
