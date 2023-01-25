import { Request, Response } from "express";
import { CreateCar } from "../protocols/cars.protocols.js";
import { createCarRules } from "../services/cars.services.js";

export async function createCarController(req: Request, res: Response){
    const car = res.locals.cars as CreateCar;
    try{
        await createCarRules(car);
        return res.sendStatus(201);
    }catch(error){
        console.log(error);
        return res.status(500).send(error);
    }
}