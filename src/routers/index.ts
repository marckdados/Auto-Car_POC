import { Router } from "express";
import carsRouter from "./carsRouter.js";

const routers = Router();
routers.use(carsRouter);

export default routers;
