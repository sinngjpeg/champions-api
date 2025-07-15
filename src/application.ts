import express from "express";
import router from "./Routes";

function createApplication() {
    const application = express();
    application.use(express.json());
    application.use("/api", router)
    return application;
}

export default createApplication;