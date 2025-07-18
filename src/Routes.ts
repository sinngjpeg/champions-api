import { Router } from "express";
import * as PlayerController from "./controllers/PlayersController";
import * as ClubsController from "./controllers/ClubsControler";

const router = Router();

router.get("/players", PlayerController.getPlayer);
router.post("/players", PlayerController.postPlayer);
router.delete("/players/:id", PlayerController.deletePlayer);
router.patch("/players/:id", PlayerController.updatePlayer);
router.get("/players/:id", PlayerController.getPlayerById);

router.get("/clubs", ClubsController.getClubs);

export default router;