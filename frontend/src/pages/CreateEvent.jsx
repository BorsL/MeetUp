import { useState } from "react";
import { useProductStore } from "../store/event";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const CreateEvent = () => {
  const navigate = useNavigate();
  const [event, setNewEvent] = useState({
    name: "",
    description: "",
    location: {
      name: "",
      link: "",
    },
    image: "",
    data: {
      payable: false,
      category: "Technology", // default option
      partecipants: 0, // not editable by the user
    },
  });

  const { createProduct } = useProductStore();

  // Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { success } = await createProduct(event);
    if (!success) {
      console.log("not Success");
      toast.error("Please fill in all fields!");
    } else {
      console.log("Success");
      toast.success("Event created successfully! 🎉");
      navigate("/app");
    }
    setNewEvent({
      name: "",
      description: "",
      location: {
        name: "",
        link: "",
      },
      image: "",
      data: {
        payable: false,
        category: "Technology",
        partecipants: 0,
      },
    });
  };

  return (
    <div className="mt-20">
      <div className="max-w-2xl mx-auto px-4 py-6 font-semibold bg-gray-800/70 backdrop-blur-lg rounded-lg border border-teal-400/20 shadow-lg">
        <h1 className="text-3xl font-black text-center text-teal-400 mb-6">
          Add Event
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Event Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-lg font-medium text-gray-300"
            >
              Event Name
            </label>
            <input
              type="text"
              id="name"
              value={event.name}
              onChange={(e) =>
                setNewEvent({ ...event, name: e.target.value })
              }
              className="w-full p-3 border border-teal-400/30 bg-gray-900 text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder="Enter event name"
              required
            />
          </div>

          {/* Event Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-lg font-medium text-gray-300"
            >
              Description
            </label>
            <textarea
              id="description"
              value={event.description}
              onChange={(e) =>
                setNewEvent({ ...event, description: e.target.value })
              }
              className="w-full p-3 border border-teal-400/30 bg-gray-900 text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder="Enter event description"
              required
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-lg font-medium text-gray-300">
              Location
            </label>
            <div className="space-y-2">
              <input
                type="text"
                id="locationName"
                value={event.location.name}
                onChange={(e) =>
                  setNewEvent({
                    ...event,
                    location: { ...event.location, name: e.target.value },
                  })
                }
                className="w-full p-3 border border-teal-400/30 bg-gray-900 text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                placeholder="Enter location name"
                required
              />
              <input
                type="text"
                id="locationLink"
                value={event.location.link}
                onChange={(e) =>
                  setNewEvent({
                    ...event,
                    location: { ...event.location, link: e.target.value },
                  })
                }
                className="w-full p-3 border border-teal-400/30 bg-gray-900 text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                placeholder="Enter location link (optional)"
              />
            </div>
          </div>

          {/* Event Image */}
          <div>
            <label
              htmlFor="image"
              className="block text-lg font-medium text-gray-300"
            >
              Event Image
            </label>
            <input
              type="text"
              id="image"
              value={event.image}
              onChange={(e) =>
                setNewEvent({ ...event, image: e.target.value })
              }
              className="w-full p-3 border border-teal-400/30 bg-gray-900 text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder="Enter image URL"
              required
            />
          </div>

          {/* Data Section */}
          <div>
            <label className="block text-lg font-medium text-gray-300">
              Event Data
            </label>
            <div className="space-y-4">
              {/* Payable Checkbox */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="payable"
                  checked={event.data.payable}
                  onChange={(e) =>
                    setNewEvent({
                      ...event,
                      data: { ...event.data, payable: e.target.checked },
                    })
                  }
                  className="h-4 w-4 text-teal-400 border-teal-400/30 bg-gray-900 rounded focus:ring-teal-400"
                />
                <label
                  htmlFor="payable"
                  className="ml-2 block text-lg text-gray-300"
                >
                  Payable
                </label>
              </div>

              {/* Category Select */}
              <div>
                <label
                  htmlFor="category"
                  className="block text-lg font-medium text-gray-300"
                >
                  Category
                </label>
                <select
                  id="category"
                  value={event.data.category}
                  onChange={(e) =>
                    setNewEvent({
                      ...event,
                      data: { ...event.data, category: e.target.value },
                    })
                  }
                  className="w-full p-3 border border-teal-400/30 bg-gray-900 text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                  required
                >
                  <option value="Technology">Technology</option>
                  <option value="Cars">Cars</option>
                  <option value="Music">Music</option>
                </select>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-3 px-4 bg-teal-400 text-gray-900 font-semibold rounded-md shadow-sm hover:bg-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all"
            >
              Add Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;