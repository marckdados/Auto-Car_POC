import { Router } from "express";
import carsRouter from "./carsRouter.js";
import brandsRouter from "./brandsRouter.js";

const routers = Router();
routers.use(carsRouter, brandsRouter);

export default routers;
