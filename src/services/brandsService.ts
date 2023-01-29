import conflictError from "../errors/conflictError.js";
import notFoundError from "../errors/notFoundError.js";
import { Brand } from "../protocols/brandsProtocols.js";
import { brandRepository } from "../repositores/brandsRepository.js";

async function createBrand(brand: Brand) {
  const brandExists = await brandRepository.searchNameBrand(brand.name);
  if (brandExists) {
    throw conflictError();
  }
  await brandRepository.createBrand(brand);
}

async function getAllBrands() {
  const brands = await brandRepository.getAllBrands();
  if (!brands) {
    throw notFoundError();
  }
  return brands;
}

export const brandService = {
  createBrand,
  getAllBrands,
};
