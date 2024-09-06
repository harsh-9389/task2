import mongoose from 'mongoose';

const BasicInfoSchema = new mongoose.Schema({
  Customer:{
    type: String,
    required: true,
  }
}, {timestamps: true});

export const BasicInfo = mongoose.model('BasicInfo', BasicInfoSchema);