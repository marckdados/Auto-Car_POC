import { Cars, CreateCar } from "../protocols/cars.protocols.js";
import { carRepository } from "../repositores/cars.repository.js";

async function insertCar(car: CreateCar) {
  try {
    const response = await carRepository.insertCar(car);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function getAllCars(): Promise<Cars[]> {
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

export const carService = {
  deleteCar,
  getAllCars,
  insertCar,
};
