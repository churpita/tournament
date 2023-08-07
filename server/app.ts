const express = require('express');

import { Request, Response, NextFunction } from 'express';

import { config } from 'dotenv';
config();

const app = express();

app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

const teamRoutes = require('./routes/team');

// app.use('/static', express.static('static'));

app.use(teamRoutes);

app.listen(process.env.API_PORT);