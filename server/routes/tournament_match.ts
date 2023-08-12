import express from "express";

const router = express.Router();

import { getTournamentMatch, addTournamentMatch, updateTournamentMatch, deleteTournamentMatch } from "../controllers/tournament_match";

router.get("/tournament-match", getTournamentMatch);
router.post("/tournament-match", addTournamentMatch);
router.put("/tournament-match", updateTournamentMatch);
router.delete("/tournament-match", deleteTournamentMatch);

module.exports = router;