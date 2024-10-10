import express, { Express, Request, Response } from "express";
import path from "path";
import fs from "fs";
import { urlToHttpOptions } from "url";

export const WebRouter = express.Router();

WebRouter.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../../web/index.html'));
});

const webDir = path.join(__dirname, '../../web/');


WebRouter.get('/*', (req: Request, res: Response) => {
    const url = req.url;
    const urlParts = url.split('/').slice(1);
    if (!urlParts.slice(0, -1).every((value) => !value.includes('.'))) { 
        //Not all urlPart are free from periods
        handleNotFound(res);
        return;
    }
    const lastPart = urlParts[urlParts.length - 1];
    const extension = lastPart.includes('.') ? lastPart.split('.').slice(-1)[0] : undefined;
    const filepath = extension ? path.join(webDir, urlParts.join('/')) : path.join(webDir, urlParts.join('/'), '/index.html');
    if(fs.existsSync(filepath)){
        res.sendFile(filepath);
    }else{
        handleNotFound(res);
    }
});

function handleNotFound(res) {
    res.sendFile(path.join(__dirname, '../../web/notfound/index.html'));
}
