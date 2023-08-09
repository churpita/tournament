import express from "express";

const router = express.Router();

import { getTeam, addTeam, updateTeam } from "../controllers/team";

router.get("/team", getTeam);
router.post("/team", addTeam);
router.put("/team", updateTeam);

module.exports = router;