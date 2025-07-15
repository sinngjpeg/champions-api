import express, { Request, Response } from "express";
import { getPlayer } from "./controllers/PlayersController";

function createApplication() {
    const application = express();
    application.use(express.json());

    application.get("/", getPlayer)
    return application;
}

export default createApplication;