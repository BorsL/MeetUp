import { Link } from "react-router-dom";

const LandingPage = () => {

  return (  
    <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden">
    {/* Stylized Background */}
    <div className="absolute top-10 left-10 w-24 h-24 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-30 rotate-12 rounded-lg blur-xl animate-floating z-0"></div>
    <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-green-400 to-blue-500 opacity-40 rotate-6 rounded-xl blur-2xl animate-floating z-0"></div>
    <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-gradient-to-r from-yellow-500 to-red-500 opacity-50 -rotate-12 rounded-lg blur-lg animate-floating z-0"></div>

    {/* Main Content */}
    <div className="relative p-10 text-6xl text-white font-extrabold lg:text-8xl z-10">
        &lt;Meet
        <span className="bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 bg-clip-text text-transparent">App</span> 
        /&gt;
    </div>
    <div className="relative p-10 text-base text-gray-300 font-extrabold lg:text-xl z-10">
        Create your <span className="bg-yellow-500 text-gray-900 px-2 py-1 rounded-md">EVENT</span> and join with friends.
    </div>
    <div className="relative mt-10 z-10">
        <Link
            to="/app"
            className="px-6 py-3 text-lg text-white font-medium bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg shadow-lg hover:scale-110 transition-all"
        >
            Enter the App
        </Link>
    </div>

    {/* Footer */}
    <div className="absolute bottom-5 text-gray-300 font-thin flex items-center space-x-2 z-10">
        <span>
            created by <span className="font-normal">Bors</span>, ideated by <span className="font-normal">Satto</span>
        </span>
        <a 
            href="https://github.com/BorsL/MeetUp" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white transition-all"
        >
            <svg 
                className="w-5 h-5" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <path 
                    fillRule="evenodd" 
                    clipRule="evenodd" 
                    d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577v-2.022C6.14 20.927 5.385 18.72 5.385 18.72c-.547-1.39-1.335-1.76-1.335-1.76-1.09-.745.083-.73.083-.73 1.204.085 1.837 1.237 1.837 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.776.42-1.305.762-1.604-2.666-.305-5.467-1.335-5.467-5.935 0-1.31.468-2.382 1.236-3.222-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.46 11.46 0 0 1 3.006-.404c1.02.004 2.045.137 3.006.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.652.243 2.873.12 3.176.77.84 1.233 1.912 1.233 3.222 0 4.613-2.805 5.626-5.478 5.92.43.37.823 1.103.823 2.222v3.293c0 .32.192.694.8.577C20.565 21.796 24 17.303 24 12c0-6.627-5.373-12-12-12Z"
                />
            </svg>
        </a>
    </div>
</div>
  );
};

export default LandingPage;
