import joi from "joi";

export const CreateCarSchema = joi.object({
  name: joi.string().min(2).max(30).required(),
  year: joi.number().min(1990).max(2023).required(),
  color: joi.string().required(),
  used: joi.boolean().default(true).required(),
  idBrand: joi.number().required(),
});

