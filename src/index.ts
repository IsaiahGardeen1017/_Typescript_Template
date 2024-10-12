import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { HelloRouter } from "./routers/helloWorld";
import { WebRouter } from "./routers/webRouter";

dotenv.config();

/*
const args = process.argv.slice(2);
const arg1 = args[0];
if(!Number.isInteger(arg1)){
    console.error(`Could not start, ${arg1} is not a valid port`);
}
const port = arg1;
*/


const port = process.env.PORT || 100;

const server: Express = express();

server.use('/api', HelloRouter);
server.use('/', WebRouter);

server.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
