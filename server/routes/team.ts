import express from "express";

const router = express.Router();

import { addTeam } from "../controllers/team";

router.post("/team", addTeam);

module.exports = router;