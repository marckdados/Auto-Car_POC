import { NextFunction, Request, Response } from "express";
import { Car, EntityCars } from "../protocols/cars.protocols.js";
import { carSchema } from "../schemas/cars.Schema.js";

function validateInsertCar(req: Request, res: Response, next: NextFunction) {
  const car = req.body as Car;

  const { error } = carSchema.validate(car, { abortEarly: false });
  if (error) {
    return res.status(409).send(error.message);
  }

  res.locals.cars = car;
  next();
}

function validateUpdateCar(req: Request, res: Response, next: NextFunction){
  const car = req.body as Car;
  
  const {error} = carSchema.validate(car,{abortEarly:false});
  if(error){
    return res.status(409).send(error.message);
  }
  res.locals.cars = car;
  next();
}

export const carMiddleware = {
  validateInsertCar,
  validateUpdateCar
};
