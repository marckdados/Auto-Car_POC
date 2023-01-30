import { Router } from "express";
import { brandsSchema } from "../schemas/brandsSchema.js";
import { validateBrandsSchemaMiddleware } from "../middlewares/validateBrandSchemaMiddleware.js";
import { brandController } from "../controllers/brandsController.js";

const brandsRouter = Router();

brandsRouter.post(
  "/brands",
  validateBrandsSchemaMiddleware(brandsSchema),
  brandController.createBrand
);
brandsRouter.get("/brands", brandController.getAllBrands);

export default brandsRouter;
