import React from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa'; // Import icons for delete and edit
import { useProductStore } from '../store/event';
import toast from "react-hot-toast";

const ProductCard = ({ product}) => {
  
    const {deleteProduct} = useProductStore();
    const handleDelete = async (pid) =>{
        const{success, message} = await deleteProduct(pid);
        if(!success){
            toast.error("Error!");
        }else{
            toast.success("Sucess! 🎉");
        }
    }
  
  
    return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm mx-auto min-w-[250px]">
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-56 object-cover"
      />

      {/* Product Info */}
      <div className="p-4">
        {/* Product Name */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {product.name}
        </h3>
        
        {/* Product Price */}
        <p className="text-lg font-bold text-blue-600 mb-4">
          ${product.price}
        </p>

        {/* Action Buttons */}
        <div className="flex justify-end gap-2">
          {/* Update Button */}
          <button
                 // Call update function on click
            className="bg-yellow-500 text-white font-semibold py-1 px-3 rounded-md hover:bg-yellow-600 flex items-center gap-1"
          >
            <FaEdit />
            Update
          </button>

          {/* Delete Button */}
          <button
            onClick={()=> handleDelete(product._id)} // Call delete function on click
            className="bg-red-500 text-white font-semibold py-1 px-3 rounded-md hover:bg-red-600 flex items-center gap-1"
          >
            <FaTrash />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
