import { CreateCar } from "../protocols/cars.protocols.js";
import { insertUniqueCar } from "../repositores/cars.repository.js";

export async function createCarRules(car: CreateCar) {
  try {
    const response = await insertUniqueCar(car);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}
