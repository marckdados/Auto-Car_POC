import notFoundError from "../errors/notFoundError.js";
import { Sale } from "../protocols/salesProtocols.js";
import { carRepository } from "../repositores/cars.repository.js";
import { saleRepository } from "../repositores/salesRepository.js";

async function createSale(sale: Sale) {
  const carSold = await carRepository.searchCarId(sale.idCar);
  if (!carSold) {
    throw notFoundError();
  }
  await saleRepository.createSale(sale);
}

export const saleService = {
  createSale,
};
