import express, { Request, Response, Router } from 'express';

const router:Router = express.Router();

router.get("/heartbeat",(req:Request,res:Response) => {
    res.status(200).send("Server is OK");
})

export default router;