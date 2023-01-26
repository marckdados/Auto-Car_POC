import { Router } from "express";
import { createCarValidate } from "../middlewares/cars.middleware.js";
import { carController, createCarController, listAllCars } from "../controllers/cars.controller.js";

const carsRouter = Router();

carsRouter.post("/cars", createCarValidate, createCarController);
carsRouter.get("/cars", listAllCars)
carsRouter.delete("/cars/:id", carController.deleteCar)

export default carsRouter;
