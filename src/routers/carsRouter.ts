import { Router } from "express";
import { carMiddleware } from "../middlewares/cars.middleware.js";
import { carController } from "../controllers/cars.controller.js";

const carsRouter = Router();

carsRouter.post(
  "/cars",
  carMiddleware.validateInsertCar,
  carController.insertCar
);
carsRouter.get("/cars", carController.listAllCars);
carsRouter.delete("/cars/:id", carController.deleteCar);
carsRouter.put(
  "/cars/:id",
  carMiddleware.validateUpdateCar,
  carController.updateCar
);

export default carsRouter;
