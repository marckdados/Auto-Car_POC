import { Router } from "express";
import { createCarValidate } from "../middlewares/cars.middleware.js";
import { createCarController } from "../controllers/cars.controller.js";

const router = Router();

router.post("/cars", createCarValidate, createCarController);


export default router;
