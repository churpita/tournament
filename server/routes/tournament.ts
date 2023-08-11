import express from "express";

const router = express.Router();

import { getTournament, addTournament, updateTournament, deleteTournament } from "../controllers/tournament";

router.get("/tournament", getTournament);
router.post("/tournament", addTournament);
router.put("/tournament", updateTournament);
router.delete("/tournament", deleteTournament);

module.exports = router;