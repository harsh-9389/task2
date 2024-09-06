import mongoose from 'mongoose'
import {BasicInfo} from "./basic_info.js";

const PartyDetailsSchema = new mongoose.Schema({
  Customer_id:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'BasicInfo',
    required: true,
    unique: true
  },
  ContactPerson:{
    type: String,
    required:true,
  },
  Address:{
    type: String,
    required: true,
  },
  Sales_credit:{
    type: String,
    enum: ['option1', 'option2', 'option3'],
    required: true,
  },
  ShoppingAddress:{
    type: String,
    required: true,
    default: "same as Address",
  },
  Executive:{
    type: String,
    enum: ['option1', 'option2', 'option3'],
    required: true,
  }
},{timestamps:true});

export const PartyDetails = mongoose.model('PartyDetails', PartyDetailsSchema);