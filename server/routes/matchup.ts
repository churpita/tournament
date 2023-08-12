import express from "express";

const router = express.Router();

import { getMatchup, addMatchup, updateMatchup, deleteMatchup } from "../controllers/matchup";

router.get("/matchup", getMatchup);
router.post("/matchup", addMatchup);
router.put("/matchup", updateMatchup);
router.delete("/matchup", deleteMatchup);

module.exports = router;