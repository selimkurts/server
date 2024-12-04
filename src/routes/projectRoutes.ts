import { Router } from "express";
import { getProjects, createProjects } from "../controllers/projectController";

const router = Router();

router.get("/getAllProjects", getProjects);
router.post("/createProject", createProjects);

export default router;