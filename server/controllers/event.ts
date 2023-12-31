import { Request, Response } from 'express';

import { db } from '../util/database';
import { SqlUtils } from '../util/sqlutils';

export const getEvent = async (req: Request, res: Response) => {
    try {
        let parameters = [
            {column_name: 'event_key', value: req.body.event_key},
            {column_name: 'name', value: req.body.name}
        ];

        let query = `SELECT * FROM event WHERE 1=1 `;
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

export const addEvent = async (req: Request, res: Response) => {
    try {
        const { name } = req.body;

        if (name == null) {
            throw new ReferenceError('A required request parameter is missing.');
        }

        await db.execute(`
            INSERT INTO event
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
            message: `Successfully added event ${name}`,
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

export const updateEvent = async (req: Request, res: Response) => {
    try {
        const { event_key, name } = req.body;

        if (event_key == null || name == null) {
            throw new ReferenceError('A required request parameter is missing.');
        }

        await db.execute(`
            UPDATE event
            SET 
                name = ?
            WHERE event_key = ?
        `, [name, event_key]);

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

export const deleteEvent = async (req: Request, res: Response) => {
    try {
        const { event_key } = req.body;

        if (event_key == null) {
            throw new ReferenceError('A required request parameter is missing.');
        }

        await db.execute(`DELETE FROM event WHERE event_key = ?`, [event_key]);

        res.status(200).json({
            success: true,
            message: `Successfully deleted event ${event_key}`,
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
