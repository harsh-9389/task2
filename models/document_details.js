import mongoose from 'mongoose'

const DocumentDetailsSchema = new mongoose.Schema({
  Customer_id:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
    required: true,
    unique: true
  },
  OrderNumber:{
    type: Number,
    required: true,
  },
  Reference:{
    type: String,
    required: true,
  },
  CustomerPONumber:{
    type: Number,
    required: true,
  },
  OrderDate:{
    type: Date,
    required:true,
  },
  DueDate:{
    type: Date,
    required:true,
  }
},{timestamps:true});

export const DocumentDetails = mongoose.model('DocumentDetails', DocumentDetailsSchema);