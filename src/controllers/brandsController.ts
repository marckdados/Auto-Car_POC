import { Request, Response } from "express";
import { Brand } from "../protocols/brandsProtocols.js";
import httpStatus from "http-status";
import { brandService } from "../services/brandsService.js";

async function createBrand(req: Request, res: Response) {
  const brand = req.body as Brand;
  try {
    await brandService.createBrand(brand);
    return res.sendStatus(httpStatus.CREATED);
  } catch (e) {
    console.log(e);
    if (e.name === "ConflictError") {
      return res.status(httpStatus.CONFLICT).send("Name of brand is exists !");
    }
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

async function getAllBrands(req: Request, res: Response) {
  try {
    const brands = await brandService.getAllBrands();
    return res.status(httpStatus.OK).send(brands);
  } catch (e) {
    console.log(e);
    if (e.name === "NotFoundError") {
      return res.sendStatus(httpStatus.NOT_FOUND);
    }
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export const brandController = {
  createBrand,
  getAllBrands,
};
