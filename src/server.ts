import express, { Request, Response} from "express";
import createApplication from "./application";

const application = createApplication();
const port = process.env.PORT;

application.listen(port, ()=> {
    console.log(`Server running at port http://localhost:${port}`)
});


