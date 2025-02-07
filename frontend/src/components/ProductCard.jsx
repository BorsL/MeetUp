// components/ProductCard.js
import React, { useState } from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { useProductStore } from '../store/event';
import toast from "react-hot-toast";
import ModalComponent from './ModalComponent'; // Import the modal component

const ProductCard = ({ product }) => {
  const { deleteProduct, changeProduct } = useProductStore();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updatedProduct, setUpdatedProduct] = useState({ ...product });

  const handleDelete = async (pid) => {
    const { success } = await deleteProduct(pid);
    if (!success) {
      toast.error("Error deleting product!");
    } else {
      toast.success("Product deleted successfully! 🎉");
    }
  };


  const handleUpdate = async (pid, updatedProduct) => {
    const {success} = await changeProduct(pid, updatedProduct)
    if (!success) {
        toast.error("Error deleting product!");
    } else {
        toast.success("Product Updated successfully! 🎉");
    }
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm mx-auto min-w-[250px] transition-transform duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl">
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 object-cover"
        />

        {/* Product Info */}
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
          <p className="text-lg font-bold text-blue-600 mb-4">${product.price}</p>

          {/* Action Buttons */}
          <div className="flex justify-end gap-2">
            {/* Update Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn btn-warning btn-sm flex items-center gap-1"
            >
              <FaEdit />
              Update
            </button>

            {/* Delete Button */}
            <button
              onClick={() => handleDelete(product._id)}
              className="btn btn-error btn-sm flex items-center gap-1"
            >
              <FaTrash />
              Delete
            </button>
          </div>
        </div>
      </div>

      {/* Use the ModalComponent for editing */}
      <ModalComponent 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title="Edit Product"
      >
        {/* Modal Content: Input fields for updating product details */}
        <input
          type="text"
          className="input input-bordered w-full my-2"
          placeholder="Product Name"
          value={updatedProduct.name}
          onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
        />
        <input
          type="number"
          className="input input-bordered w-full my-2"
          placeholder="Price"
          value={updatedProduct.price}
          onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })}
        />
        <input
          type="text"
          className="input input-bordered w-full my-2"
          placeholder="Image URL"
          value={updatedProduct.image}
          onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })}
        />

        {/* Modal Actions */}
        <div className="modal-action">
          <button onClick={()=>{handleUpdate(product._id, updatedProduct)}} className="btn btn-success">
            Save
          </button>
          <button onClick={() => setIsModalOpen(false)} className="btn">
            Cancel
          </button>
        </div>
      </ModalComponent>
    </>
  );
};

export default ProductCard;
