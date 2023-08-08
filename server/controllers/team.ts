import { Request, Response } from 'express';

import { db } from '../util/database';

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