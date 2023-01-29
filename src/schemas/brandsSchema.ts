import joi from "joi";

export const brandsSchema = joi.object({
  name: joi.string().required(),
});
