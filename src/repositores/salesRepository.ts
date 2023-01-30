import prisma from "../database/db.js";
import { Sale } from "../protocols/salesProtocols.js";

async function createSale(sale: Sale) {
  return prisma.sales.create({
    data: sale,
  });
}

export const saleRepository = {
  createSale,
};
