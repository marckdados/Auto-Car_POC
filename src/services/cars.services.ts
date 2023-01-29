import { Car, EntityCars } from "../protocols/cars.protocols.js";
import { carRepository } from "../repositores/cars.repository.js";
import notFoundError from "../errors/notFoundError.js";

async function insertCar(car: EntityCars) {
  try {
    const response = await carRepository.insertCar(car);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function getAllCars(): Promise<Car[]> {
  try {
    const response = await carRepository.getAllCars();
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function deleteCar(id: number) {
  await carRepository.deleteCar(id);
}

async function updateCar(id: number, car: Car): Promise<Response> {
  try {
    const carExists = await carRepository.searchCarId(id);
    if (!carExists) {
      throw notFoundError();
    }
    await carRepository.updateCar(id, car);
  } catch (e) {
    console.log(e);
    return e;
  }
}

export const carService = {
  deleteCar,
  getAllCars,
  insertCar,
  updateCar,
};
