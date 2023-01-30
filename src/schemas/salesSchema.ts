import joi from "joi";

export const salesSchema = joi.object({
  buyer: joi.string().required(),
  seller: joi.string().required(),
  date: joi.date().required(),
  idCar: joi.number().required(),
});
