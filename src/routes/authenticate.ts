import express, { Request, Response, Router } from 'express';
import users from '../../dummy/users.json' with { type: "json" };
import session from 'express-session';

declare module 'express-session' {
    interface SessionData {
        user: string;
    }
}


const router: Router = express.Router();


router.post('/v1/login', (req: Request, res: Response) => {
    const { username, password } = req.body as { username: keyof typeof users; password: string };

    if (users[username] === password) {
        req.session.user = username;
        res.status(200).json({ message: 'Login successful' });
    } else {
        res.status(401).json({ message: 'Invalid username or password' });
    }
});

// Check session route
router.get('/v1/verify-session', (req: Request, res: Response) => {
    if (req.session.user) {
        res.status(200).json({ user: req.session.user, message: 'User is logged' });
    } else {
        res.status(401).json({ user: "", message: 'No user is logged in' });
    }
});

// Logout route
router.post('/v1/logout', (req: Request, res: Response) => {
    req.session.destroy((err: Error | null) => {
        if (err) {
            res.status(500).json({ message: 'Error logging out' });
        } else {
            res.status(200).json({ message: 'Logged out successfully' });
        }
    });
});

export default router;
