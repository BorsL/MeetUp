import { useState } from "react";

const CreateEvent = () => {
  const [event, setNewEvent] = useState({
    name: "",
    price: "",
    image: null, // image should be a file, so initialize with null
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", event.name);
    console.log("Price:", event.price);
    console.log("Image:", event.image); // Image will be a file object
    // Add the logic to handle the data submission here
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
            type="file"
            id="image"
            onChange={(e) => setNewEvent({ ...event, image: e.target.files[0] })}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            
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
