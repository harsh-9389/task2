import {PartyDetails} from "../models/party_details.js";
import {DocumentDetails} from "../models/document_details.js";
import {ItemList} from "../models/item_list.js";
import {BasicInfo} from "../models/basic_info.js";


// create api
export const createDetails = async (req, res) => {
  try{
    const data = req.body;

    const basic_info = new BasicInfo(data[0]);
    await basic_info.save()

    const party_details = new PartyDetails({
      Customer_id: basic_info,
      ...data[1]
    });

    const document_details = new DocumentDetails({
      Customer_id: basic_info,
      ...data[2]
    });

    const item_list = new ItemList({
      Customer_id: basic_info,
      ...data[3]
    });

    await party_details.save() ;
    await document_details.save() ;
    await item_list.save() ;

    return res.status(200).send({
      message: 'data received successfully.',
      data: data[1]
    })
  }catch {
    return res.status(400).json({error: "Error in getting details"});
  }
}


// Read API
export const readDetails = async(req, res)=>{
  try{
    const id = req.params.id;
    const basic_info = await BasicInfo.findById(id) ;
    const party_details = await PartyDetails.find({Customer_id: id}) ;
    const document_details = await DocumentDetails.find({Customer_id: id}) ;
    const item_list = await ItemList.find({Customer_id: id}) ;

    res.status(200).json({
      message: "data read successfully",
      data: [basic_info, party_details, document_details, item_list]
    })
  }catch(e){
    console.log("error in Read API", e) ;
    res.status(500).json({
      message: 'error in Read Api'
    })
  }
}


// Update api
export const updateDetails = async (req, res) => {
  try{
    const new_data = req.body;

    const basic_info = await BasicInfo.findByIdAndUpdate(req.params.id, new_data[0]);

    const party_details = await PartyDetails.findOneAndUpdate({Customer_id: req.params.id}, {
      Customer_id: basic_info,
      ...new_data[1]
    });

    const document_details = await DocumentDetails.findOneAndUpdate({Customer_id: req.params.id}, {
      Customer_id: basic_info,
      ...new_data[2]
    });

    const item_list = await ItemList.findOneAndUpdate({Customer_id: req.params.id}, {
      Customer_id: basic_info,
      ...new_data[3]
    });

    return res.status(200).send({
      message: 'data Updated successfully.',
      data: [basic_info, party_details, document_details, item_list]
    })
  }catch {
    return res.status(400).json({error: "Error in Updating details"});
  }
}


// delete API
export const deleteDetails = async (req, res) =>{
  try{
    const id = req.params.id ;

    await BasicInfo.findByIdAndDelete(id) ;
    await PartyDetails.findOneAndDelete({Customer_id: id}) ;
    await DocumentDetails.findOneAndDelete({Customer_id: id}) ;
    await ItemList.findOneAndDelete({Customer_id: id}) ;

    res.status(201).json('Deleted successfully');
  }catch(e){
    res.status(500).json({
      message: 'Error in deleting data',
      Error: e
    })
  }
}
