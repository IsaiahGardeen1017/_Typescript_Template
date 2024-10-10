import express, {Express, Request, Response} from "express";

export const HelloRouter = express.Router();

HelloRouter.get('/hello', (req: Request, res: Response) => {
    res.send('World')
});
