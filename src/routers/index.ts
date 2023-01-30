import { Router } from "express";
import carsRouter from "./carsRouter.js";
import brandsRouter from "./brandsRouter.js";
import sallesRouter from "./salesRouter.js";

const routers = Router();
routers.use(carsRouter, brandsRouter, sallesRouter);

export default routers;
