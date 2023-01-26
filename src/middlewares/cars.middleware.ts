import { NextFunction, Request, Response } from "express";
import { CreateCar } from "../protocols/cars.protocols.js";
import { CreateCarSchema } from "../schemas/cars.Schema.js";

function validateInsertCar(req: Request, res: Response, next: NextFunction) {
  const car = req.body as CreateCar;

  const { error } = CreateCarSchema.validate(car, { abortEarly: false });
  if (error) {
    return res.status(409).send(error.message);
  }

  res.locals.cars = car;
  next();
}

export const carMiddleware = {
  validateInsertCar,
};
