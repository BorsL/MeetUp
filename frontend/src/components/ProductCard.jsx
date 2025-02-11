// components/ProductCard.js
import React, { useState } from 'react';
// Images
import { FaTrash, FaEdit, FaThumbsUp } from 'react-icons/fa';

import EventCategoryIcon from './EventCategory';

import { useProductStore } from '../store/event';
import { useAuthStore } from '../store/useAuthStore';

import toast from "react-hot-toast";
import ModalComponent from './ModalComponent'; // Import the modal component

const ProductCard = ({ product }) => {
  const { deleteProduct, changeProduct } = useProductStore();
  const { authUser } = useAuthStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updatedProduct, setUpdatedProduct] = useState({ ...product });
  const [liked, setLiked] = useState(false);

  const handleLike = async (e) => {
    e.stopPropagation(); // Prevent triggering any parent onClick handlers if necessary
    
    // Calculate the new participants count
    const newPartecipants = updatedProduct.data.partecipants + 1;
  
    // Create an updated product object with the new participants count
    const newUpdatedProduct = {
      ...updatedProduct,
      data: {
        ...updatedProduct.data,
        partecipants: newPartecipants,
      },
    };
  
    // Toggle the like state
    setLiked((prevLiked) => !prevLiked);
  
    // Update the local state with the new product details
    setUpdatedProduct(newUpdatedProduct);
  
    // Call handleUpdate with the updated product object
    await handleUpdate(product._id, newUpdatedProduct);
  };

  
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
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden w-sm mx-auto transition-transform duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl">
      {/* Product Image */}
      <div className="relative">
      <img src={product.image} alt={product.name} className="w-full h-56 object-cover" />
        <EventCategoryIcon product={product} />
      </div>
      {/* Product Info */}
      <div className="p-5">
      <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4 uppercase tracking-wide">
          {product.name}
        </h3>


  {/* Location */}
  <p>
    {product.location?.link ? (
      <a
        href={product.location.link}
        className="text-blue-600 font-medium hover:underline"
      >
        📍 {product.location.name}
      </a>
    ) : (
      <span className="text-gray-500">📍 {product.location.name}</span>
    )}
  </p>

  {/* Description */}
  <p className="mt-2 text-gray-700 text-sm">
    {product.description}
  </p>

  {/* Like Button & Participants */}
  <div className="flex mt-4 bg-gray-700 rounded-lg p-2 w-fit">
    <button
      onClick={handleLike}
      className={`flex items-center gap-2 text-sm font-semibold transition-colors ${
        liked ? "text-green-500" : "text-gray-400 hover:text-green-500"
      }`}
    >
      <FaThumbsUp size={10} />
      {product.data.partecipants}
    </button>
  </div>

  {/* Action Buttons */}
  {authUser && (
    <div className="flex justify-end gap-3 mt-5">
      {/* Update Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 transition-all"
      >
        <FaEdit />
        Update
      </button>

      {/* Delete Button */}
      <button
        onClick={() => handleDelete(product._id)}
        className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-red-500 rounded-lg hover:bg-red-600 transition-all"
      >
        <FaTrash />
        Delete
      </button>
    </div>
  )}
</div>


    </div>

      {/* Use the ModalComponent for editing */}
      <ModalComponent 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title="Edit Product"
      >
        {/* Brighter modal content container */}
        <div className="p-5 bg-slate-700 text-black rounded-lg shadow-md">
          <input
            type="text"
            className="input input-bordered w-full my-2 bg-[#1d222b] text-gray-200"
            placeholder="Product Name"
            value={updatedProduct.name}
            onChange={(e) =>
              setUpdatedProduct({ ...updatedProduct, name: e.target.value })
            }
          />

          <textarea
            className="textarea textarea-bordered w-full my-2 bg-[#1d222b] text-gray-200"
            placeholder="Description"
            value={updatedProduct.description || ""}
            onChange={(e) =>
              setUpdatedProduct({ ...updatedProduct, description: e.target.value })
            }
          />

          <input
            type="text"
            className="input input-bordered w-full my-2 bg-[#1d222b] text-gray-200"
            placeholder="Image URL"
            value={updatedProduct.image}
            onChange={(e) =>
              setUpdatedProduct({ ...updatedProduct, image: e.target.value })
            }
          />

          {/* Position Inputs */}
          <input
            type="text"
            className="input input-bordered w-full my-2 bg-[#1d222b] text-gray-200"
            placeholder="Location Name"
            value={updatedProduct.location?.name || ""}
            onChange={(e) =>
              setUpdatedProduct({
                ...updatedProduct,
                location: { 
                  ...updatedProduct.location, 
                  name: e.target.value 
                },
              })
            }
          />

          <input
            type="text"
            className="input input-bordered w-full my-2 bg-[#1d222b] text-gray-200"
            placeholder="Losition Link"
            value={updatedProduct.location?.link || ""}
            onChange={(e) =>
              setUpdatedProduct({
                ...updatedProduct,
                location: { 
                  ...updatedProduct.location, 
                  link: e.target.value 
                },
              })
            }
          />

          {/* Modal Actions */}
          <div className="modal-action mt-4">
            <button
              onClick={() => handleUpdate(product._id, updatedProduct)}
              className="btn btn-success"
            >
              Save
            </button>
            <button onClick={() => setIsModalOpen(false)} className="btn">
              Cancel
            </button>
          </div>
        </div>
      </ModalComponent>


    </>
  );
};

export default ProductCard;
