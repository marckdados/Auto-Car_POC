import prisma from "../database/db.js";
import { CreateCar } from "../protocols/cars.protocols.js";

async function insertCar(car: CreateCar) {
  return prisma.cars.create({
    data: car,
  });
}

async function getAllCars() {
  return prisma.cars.findMany();
}

async function deleteCar(id: number) {
  return prisma.cars.delete({
    where: {
      id,
    },
  });
}

export const carRepository = {
  deleteCar,
  getAllCars,
  insertCar,
};
