import { Cars, CreateCar } from "../protocols/cars.protocols.js";
import { carRepository, getAllCars, insertUniqueCar } from "../repositores/cars.repository.js";

export async function createCarRules(car: CreateCar) {
  try {
    const response = await insertUniqueCar(car);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function listAllCarRules() : Promise<Cars[]> {
  try {
    const response = await getAllCars();
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}


async function deleteCar(id: number){
  await carRepository.deleteCar(id);
}

export const carService = {
  deleteCar
}