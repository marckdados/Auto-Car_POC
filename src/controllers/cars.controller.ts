import { Request, Response } from "express";
import { Car, EntityCars } from "../protocols/cars.protocols.js";
import { carService } from "../services/cars.services.js";

async function insertCar(req: Request, res: Response) {
  const car = res.locals.cars as EntityCars;
  try {
    await carService.insertCar(car);
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
}

async function listAllCars(
  req: Request,
  res: Response
): Promise<Response<Car[] | Error>> {
  try {
    const response = await carService.getAllCars();
    return res.status(200).send(response);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

async function deleteCar(req: Request, res: Response): Promise<Response> {
  const id = parseInt(req.params.id);
  try {
  
    await carService.deleteCar(id);
    return res.sendStatus(200);
  } catch (e) {
    if (e.name === "NotFoundError") {
      return res.sendStatus(404);
    }
    return res.sendStatus(500);
  }
}

async function updateCar(req: Request, res: Response): Promise<Response> {
  const id = parseInt(req.params.id);
  const car = req.body as Car;
  try {
    await carService.updateCar(id, car);
    return res.sendStatus(200);
  } catch (e) {
    if (e.name === "NotFoundError") {
      return res.sendStatus(404);
    }
    return res.sendStatus(500);
  }
}

export const carController = {
  deleteCar,
  insertCar,
  listAllCars,
  updateCar,
};
