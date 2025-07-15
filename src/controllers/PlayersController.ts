import { HttpResponse } from './../models/HttpResponseModel';
import { request, Request, Response } from "express";
import * as service from "../services/PlayersService";

export const getPlayer = async (request: Request, response: Response) => {
    const httpResponse = await service.getPlayerService();
    response.status(httpResponse.statusCode).json(httpResponse.body);
};

export const getPlayerById = async (request: Request, response: Response) => {
    const id = parseInt(request.params.id);
    const HttpResponse = await service.getPlayerByIdService(id);
    response.status(HttpResponse.statusCode).json(HttpResponse.body);
}