import express, {Request, Response} from "express";


const app = express();
const port = process.env.PORT;

app.use(express.json());

app.get("/", (request: Request, response: Response) => {
    response.status(200).json("Hello World!");
});


app.listen(port, ()=> {
    console.log(`Server running at port http://localhost:${port}`)
});


