import { Request, Response } from "express";
import { getPlayerService } from "../services/PlayersService";
import { ok } from "../utils/HttpHelper";


export const getPlayer = async(request: Request, response: Response) =>{
    const data = await getPlayerService();
    const res = await ok(data)
    response.status(res.statusCode).json(res.body);
};