import { Router} from "express";
import { getPlayer } from "./controllers/PlayersController";


const router = Router()
router.get("/players", getPlayer)

export default router