import { Router } from "express";
import cars from "./cars.router.js";

const routers = Router();
routers.use(cars);

export default routers;
