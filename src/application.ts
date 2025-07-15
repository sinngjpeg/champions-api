import express, { Request, Response} from "express";

function createApplication(){
    const application = express();
    application.use(express.json());

    application.get("/", (request: Request, response: Response) => {
        response.status(200).json("Hello World!");
    });

    return application;
}

export default createApplication;