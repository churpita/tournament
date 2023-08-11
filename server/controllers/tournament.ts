import { Request, Response } from 'express';

import { db } from '../util/database';

export const getTournament = async (req: Request, res: Response) => {
    try {
        const { tournament_key } = req.body;

        let results;

        if (tournament_key != null) {
            results = await db.execute(`SELECT * FROM tournament WHERE tournament_key = ?`, [tournament_key]);
            results = results[0];
        }
        else {
            results = await db.execute(`SELECT * FROM tournament`);
            results = results[0];
        }

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
        const { name, game_key, description } = req.body;

        if (name == null || game_key == null) {
            throw new ReferenceError('A required request parameter is missing.');
        }

        await db.execute(`
            INSERT INTO tournament
            (    
                name,
                game_key,
                description
            )
            VALUES
            (
                ?,
                ?,
                ?
            )
        `, [name, game_key, description]);

        res.status(200).json({
            success: true,
            message: `Successfully added tournament ${name}`,
            data: {
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
        const { tournament_key, name, game_key, description } = req.body;

        if (tournament_key == null || name == null || game_key == null) {
            throw new ReferenceError('A required request parameter is missing.');
        }

        await db.execute(`
            UPDATE tournament
            SET 
                name = ?,
                game_key = ?,
                description = ?
            WHERE tournament_key = ?
        `, [name, game_key, description, tournament_key]);

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
