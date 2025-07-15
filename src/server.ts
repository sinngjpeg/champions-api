import express, {Request, Response} from "express";


const app = express();
const port = process.env.PORT;

app.get("/", (request: Request, response: Response) => {
    response.send("Hello World!");
});


app.listen(port, ()=> {
    console.log(`Server running at port http://localhost:${port}`)
});


