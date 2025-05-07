import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import authenticate from './routes/authenticate.js';
import heartbeat from './routes/heartbeat.js';
import games from './routes/games.js';
import * as crypto from 'crypto';

const app = express();
const PREFIX = "/api"

const secret = crypto.randomBytes(32).toString('hex');

app.use(bodyParser.json());
app.use(session({
    secret: secret,
    resave: false,
    saveUninitialized: true
}));

// Use authentication routes
app.use(PREFIX,authenticate);
app.use(PREFIX,heartbeat);
app.use(PREFIX,games);

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});