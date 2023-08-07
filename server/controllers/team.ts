import { Request, Response } from 'express';

import { db } from '../util/database';

export const addTeam = async (req: Request, res: Response) => {
    const { name, captain_name } = req.body;

    try {
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