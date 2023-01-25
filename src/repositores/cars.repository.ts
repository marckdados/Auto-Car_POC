import prisma from "../database/db.js";
import { CreateCar } from "../protocols/cars.protocols.js";

export async function insertUniqueCar(car: CreateCar) {
  return prisma.cars.create({
    data: car,
  });
}
