import * as HttpResponse from "../utils/HttpHelper";
import * as repository from "../repositories/ClubsRepository";

export const getClubService = async () => {
    const data = await repository.findAllClubs();
    const response = HttpResponse.ok(data);
    return response;
};