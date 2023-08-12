import { Request, Response } from 'express';

import { db } from '../util/database';
import { SqlUtils } from '../util/sqlutils';

export const getGame = async (req: Request, res: Response) => {
    try {
        let parameters = [
            {column_name: 'game_key', value: req.body.game_key},
            {column_name: 'name', value: req.body.name}
        ];

        let query = `SELECT * FROM game WHERE 1=1 `;
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

export const addGame = async (req: Request, res: Response) => {
    try {
        const { name } = req.body;

        if (name == null) {
            throw new ReferenceError('A required request parameter is missing.');
        }

        await db.execute(`
            INSERT INTO game
            (    
                name   
            )
            VALUES
            (
                ?
            )
        `, [name]);

        res.status(200).json({
            success: true,
            message: `Successfully added game ${name}`,
            data: {
                name: name
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

export const updateGame = async (req: Request, res: Response) => {
    try {
        const { game_key, name } = req.body;

        if (game_key == null || name == null) {
            throw new ReferenceError('A required request parameter is missing.');
        }

        await db.execute(`
            UPDATE game
            SET 
                name = ?
            WHERE game_key = ?
        `, [name, game_key]);

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

export const deleteGame = async (req: Request, res: Response) => {
    try {
        const { game_key } = req.body;

        if (game_key == null) {
            throw new ReferenceError('A required request parameter is missing.');
        }

        await db.execute(`DELETE FROM game WHERE game_key = ?`, [game_key]);

        res.status(200).json({
            success: true,
            message: `Successfully deleted game ${game_key}`,
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
