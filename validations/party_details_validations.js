import Joi from 'joi';
import mongoose from "mongoose";

const schema = Joi.object({
  Customer_id: Joi.string().required(),
  ContactPerson: Joi.string().required(),
  Address: Joi.string().required(),
  Sales_credit: Joi.string().required().valid('option1', 'option2', 'option3'),
  ShoppingAddress:Joi.string().required().default("same as Address"),
  Executive:Joi.string().required().valid('option1', 'option2', 'option3')
})