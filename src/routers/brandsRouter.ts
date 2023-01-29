import { Router } from "express";
import { brandsSchema } from "../schemas/brandsSchema.js";
import { validateBrandsSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";

const brandsRouter = Router();

brandsRouter.post("/brands", validateBrandsSchemaMiddleware(brandsSchema), );