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
const eventRoutes = require('./routes/event');
const gameRoutes = require('./routes/game');
const tournamentRoutes = require('./routes/tournament');
const tournamentMatchRoutes = require('./routes/tournament_match');

// app.use('/static', express.static('static'));

app.use(teamRoutes);
app.use(eventRoutes);
app.use(gameRoutes);
app.use(tournamentRoutes);
app.use(tournamentMatchRoutes);

app.listen(process.env.API_PORT);