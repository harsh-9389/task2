import Joi from 'joi';
import mongoose from "mongoose";

const schema = Joi.object({
  Customer_id: Joi.string().required(),
  OrderNumber:Joi.number().required(),
  Reference: Joi.string().required(),
  CustomerPONumber: Joi.number().required(),
  OrderDate: Joi.date().required(),
  DueDate: Joi.date().required()
})