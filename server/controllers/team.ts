import { Request, Response } from 'express';

import { db } from '../util/database';

export const getTeam = async (req: Request, res: Response) => {
    try {
        const { team_key } = req.body;

        let results;

        if (team_key != null) {
            results = await db.execute(`SELECT * FROM team WHERE team_key = ?`, [team_key]);
            results = results[0];
        }
        else {
            results = await db.execute(`SELECT * FROM team`);
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

export const addTeam = async (req: Request, res: Response) => {
    try {
        const { name, captain_name } = req.body;

        if (name == null || captain_name == null) {
            throw new ReferenceError('A required request parameter is missing.');
        }

        await db.execute(`
            INSERT INTO team
            (
                name,
                captain_name
            )
            VALUES
            (
                ?,
                ?
            )
        `, [name, captain_name]);

        res.status(200).json({
            success: true,
            message: `Successfully added ${name}`,
            data: {
                name: name,
                captain_name: captain_name
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

export const updateTeam = async (req: Request, res: Response) => {
    try {
        const { team_key, name, captain_name } = req.body;

        if (team_key == null || name == null || captain_name == null) {
            throw new ReferenceError('A required request parameter is missing.');
        }

        await db.execute(`
            UPDATE team
            SET 
                name = ?,
                captain_name = ?
            WHERE team_key = ?
        `, [name, captain_name, team_key]);

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
