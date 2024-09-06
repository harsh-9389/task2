import Joi from 'joi';
import mongoose from "mongoose";

const schema = Joi.object({
  Customer_id: Joi.string().required(),
  SerialNumber: Joi.string().required(),
  Description: Joi.string().required(),
  SAC: Joi.string().required(),
  Quantity: Joi.number().required().default(0),
  Units: Joi.number().required().default(0),
  Rate: Joi.number().required().default(0),
  Discount: Joi.number().required().default(0),
  Tax: Joi.number().required().default(0),
  CGST: Joi.number().required().default(0),
  SGST:Joi.number().required().default(0),
  Amount:Joi.number().required(),
})