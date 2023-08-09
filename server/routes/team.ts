import express from "express";

const router = express.Router();

import { getTeam, addTeam } from "../controllers/team";

router.get("/team", getTeam);
router.post("/team", addTeam);

module.exports = router;