import { Request, Response } from "express";
import httpStatus from "http-status";
import { Sale } from "../protocols/salesProtocols.js";
import { saleService } from "../services/salesService.js";

async function createSale(req: Request, res: Response) {
  const sale = req.body as Sale;
  try {
    await saleService.createSale(sale);
    return res.sendStatus(httpStatus.CREATED);
  } catch (e) {
    console.log(e);
    if (e.name === "ConflictError") {
      return res.status(httpStatus.CONFLICT);
    }
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

async function getAllSales(req: Request, res: Response) {
  try {
    const response = await saleService.getAllSales();
    return res.status(httpStatus.OK).send(response);
  } catch (e) {
    console.log(e);
    if (e.name === "NotFoundError") {
      return res.sendStatus(httpStatus.NOT_FOUND);
    }
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export const salesController = {
  createSale,
  getAllSales,
};
