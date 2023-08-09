import express from "express";

const router = express.Router();

import { getEvent, addEvent, updateEvent, deleteEvent } from "../controllers/event";

router.get("/event", getEvent);
router.post("/event", addEvent);
router.put("/event", updateEvent);
router.delete("/event", deleteEvent);

module.exports = router;