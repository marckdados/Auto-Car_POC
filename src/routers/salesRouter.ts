import { Router } from "express";
import { validateSalesSchemaMiddleware } from "../middlewares/validateSalesSchemaMiddleware.js";
import { salesSchema } from "../schemas/salesSchema.js";
import { salesController } from "../controllers/salesController.js";

const sallesRouter = Router();

sallesRouter.post(
  "/sales",
  validateSalesSchemaMiddleware(salesSchema),
  salesController.createSale
);

export default sallesRouter;
