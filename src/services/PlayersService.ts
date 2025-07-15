import * as PlayerRepository  from "../repositories/PlayersRepository";
import * as HttpResponse from "../utils/HttpHelper";

export const getPlayerService = async () => {
    const data = await PlayerRepository.findAllPlayers();
    let response = null

    if (data) {
        response = await HttpResponse.ok(data);
    } else {
        response = await HttpResponse.noContent();
    }

    return response;
}


export const getPlayerByIdService = async (id: number) => {
    const data = await PlayerRepository.findPlayerById(id);
    let response = null;

    if(data){
        response = await HttpResponse.ok(data);
    } else {
        response = await HttpResponse.noContent();
    }

    return response;
}