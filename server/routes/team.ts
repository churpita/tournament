import express from "express";

const router = express.Router();

import { getTeam, addTeam, updateTeam, deleteTeam } from "../controllers/team";

router.get("/team", getTeam);
router.post("/team", addTeam);
router.put("/team", updateTeam);
router.delete("/team", deleteTeam);

module.exports = router;