import express from "express";

const router = express.Router();

import { getGame, addGame, updateGame, deleteGame } from "../controllers/game";

router.get("/game", getGame);
router.post("/game", addGame);
router.put("/game", updateGame);
router.delete("/game", deleteGame);

module.exports = router;