import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold">Welcome to My App</h1>
      <p className="text-lg text-gray-600 mt-2">A short description of your app</p>
      <button
        onClick={() => navigate("/app")}
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Enter the App
      </button>
    </div>
  );
};

export default LandingPage;
