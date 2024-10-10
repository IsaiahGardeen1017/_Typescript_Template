import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { HelloRouter } from "./routers/helloWorld";
import { WebRouter } from "./routers/webRouter";

dotenv.config();

const server: Express = express();
const backendPort = process.env.PORT;

server.use('/api', HelloRouter);
server.use('/', WebRouter);

server.listen(backendPort, () => {
    console.log(`Listening on port ${backendPort}`);
});
