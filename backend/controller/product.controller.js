import Event from '../models/events.model.js';
import mongoose from 'mongoose';

export const getProducts = async (req, res)=>{
    try {
        const products = await Event.find({});
        res.status(200).json({success: true, data: products})
    } catch (error) {
        console.log("Error in Featching event:", error.message);
        res.status(500).json({success: false, data: "Server Error"})
    }
}

export const insertProducts = async (req, res)=>{
    const product = req.body; //user will send this data

    if(!product.name || !product.description || !product.image || !product.location?.name){
        return res.status(400).json({success: false, message: "Please provide all fields"})
    }

    const newProduct = new Event(product);

    try {
        await newProduct.save()
        res.status(201).json({success: true, data: newProduct})
    } catch (error) {
        console.log("Error in Create event:", error.message);
        res.status(500).json({success: false, data: "Server Error"})
    }

}

export const deleteProducts =  async (req, res)=>{
    const {id} = req.params;
    
    try {
        await Event.findByIdAndDelete(id);
        res.status(200).json({success: true, message:"Products deleted"})
    } catch (error) {
        res.status(500).json({success: false, data: "Server Error"})
    }
}

export const updateProducts = async (req, res) => {
    const { id } = req.params;
    const product = req.body;
  
    // Validate the ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }
  
    try {
      const updatedProduct = await Event.findByIdAndUpdate(id, product, { new: true });
      res.status(200).json({ success: true, data: updatedProduct });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Server Error" });
    }
}