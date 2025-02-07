import { useState } from "react";
import { useProductStore } from "../store/event";
import toast from "react-hot-toast";

const CreateEvent = () => {
  const [event, setNewEvent] = useState({
    name: "",
    price: "",
    image: "", // image should be a file, so initialize with null
  });

  const {createProduct} = useProductStore();
  const handleSubmit = async(e) => {
    e.preventDefault();
    const {success, message} = await createProduct(event)
    if(!success){
        console.log("not Success")
        toast.error("Please fill in all fields!");
    }else{
        console.log("Success")
        toast.success("Event created successfully! 🎉");
    }
    setNewEvent({name: "", price: "", image: ""})
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        Add Event
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Input */}
        <div>
          <label
            htmlFor="name"
            className="block text-lg font-medium text-gray-700"
          >
            Event Name
          </label>
          <input
            type="text"
            id="name"
            value={event.name}
            onChange={(e) => setNewEvent({ ...event, name: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter event name"
            required
          />
        </div>

        {/* Price Input */}
        <div>
          <label
            htmlFor="price"
            className="block text-lg font-medium text-gray-700"
          >
            Price
          </label>
          <input
            type="number"
            id="price"
            value={event.price}
            onChange={(e) => setNewEvent({ ...event, price: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter event price"
            required
          />
        </div>

        {/* Image Upload */}
        <div>
          <label
            htmlFor="image"
            className="block text-lg font-medium text-gray-700"
          >
            Event Image
          </label>
          <input
            type="img"
            id="image"
            value={event.image}
            onChange={(e) => setNewEvent({ ...event, image: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter image"
            required
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Event
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateEvent;
