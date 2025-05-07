import express, { Request, Response, Router } from 'express';
import data from '../../dummy/data.json' with { type: "json" };
import { Game, Provider, Group } from '../types/types.js';

const games: Router = express.Router();

// API to retrieve all games
games.get('/v1/games', (req: Request, res: Response) => {
    const groupGameIds = new Set(data.groups.flatMap((group: Group) => group.games));
    const filteredGames: Game[] = data.games.filter((game: Game) => groupGameIds.has(game.id));

    res.status(200).json(filteredGames);
});

// API to retrieve all providers
games.get('/v1/providers', (req: Request, res: Response) => {
    const providersData: Provider[] = data.providers;
    res.status(200).json(providersData);
});

// API to retrieve all groups
games.get('/v1/groups', (req: Request, res: Response) => {
    const groupsData: Group[] = data.groups;
    res.status(200).json(groupsData);
});

export default games;