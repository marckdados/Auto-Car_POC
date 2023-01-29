import prisma from "../database/db.js";
import { Brand } from "../protocols/brandsProtocols.js";

async function searchNameBrand(name: string) {
  return prisma.brands.findFirst({
    where: { name },
  });
}

async function createBrand(brand: Brand) {
  return prisma.brands.create({
    data: brand,
  });
}

async function getAllBrands() {
  return prisma.brands.findMany();
}

export const brandRepository = {
  searchNameBrand,
  createBrand,
  getAllBrands,
};
