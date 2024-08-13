import { Router } from "express";

import { listarTodoslugar } from "../../controllers/lugar/lugarController.js";

const lugarRouter = Router();

lugarRouter.get("/", listarTodoslugar);

export default lugarRouter;