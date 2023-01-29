import prisma from "../database/db.js";
import { Car, EntityCars } from "../protocols/cars.protocols.js";

async function insertCar(car: EntityCars) {
  return prisma.cars.create({
    data: car,
  });
}

async function getAllCars() {
  return prisma.cars.findMany({
    orderBy: {
      id: "asc",
    },
  });
}

async function deleteCar(id: number) {
  return prisma.cars.delete({
    where: {
      id,
    },
  });
}

async function searchCarId(id: number) {
  return prisma.cars.findUnique({
    where: {
      id,
    },
  });
}

async function updateCar(id: number, car: Car) {
  return prisma.cars.update({
    where: {
      id,
    },
    data: car,
  });
}

export const carRepository = {
  deleteCar,
  getAllCars,
  insertCar,
  searchCarId,
  updateCar,
};
