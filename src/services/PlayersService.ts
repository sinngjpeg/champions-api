import * as PlayerRepository  from "../repositories/PlayersRepository";
import { noContent, ok } from "../utils/HttpHelper";

export const getPlayerService = async () => {
    const data = await PlayerRepository.findAllPlayers();
    let response = null

    if (data) {
        response = await ok(data);
    } else {
        response = await noContent();
    }

    return response;
}