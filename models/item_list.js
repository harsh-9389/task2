import mongoose from 'mongoose';

const ItemListSchema = new mongoose.Schema({
  Customer_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
    required: true,
    unique: true
  },
  SerialNumber:{
    type:String,
    required:true,
  },
  Description:{
    type:String,
    required:true,
  },
  SAC:{
    type:String,
    required:true,
  },
  Quantity:{
    type:Number,
    required:true,
    default:0
  },
  Units:{
    type:Number,
    required:true,
    default:0
  },
  Rate:{
    type:Number,
    required:true,
    default:0
  },
  Discount:{
    type:Number,
    required:true,
    default:0
  },
  Tax:{
    type:Number,
    required:true,
    default:0
  },
  CGST:{
    type:Number,
    required:true,
    default:0
  },
  SGST:{
    type:Number,
    required:true,
    default:0
  },
  Amount:{
    type:Number,
    required:true,
  }
}, {timestamps: true});

export const ItemList = mongoose.model('ItemList',ItemListSchema);