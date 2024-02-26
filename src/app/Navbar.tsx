export default function Navbar(){
  return (
    <nav className="flex justify-between flex-wrap p-6 lg:px-48">
      <div className="flex items-center flex-shrink-0 text-violet-700 mr-6">
        <svg
          className="fill-current h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
        </svg>
        <span className="font-semibold text-xl tracking-tight text-white">
          Uknowme
        </span>
      </div>
       <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div> 
      <div className="w-full block flex-grow items-center sm:flex sm:w-auto">
        <div className="text-sm sm:flex-grow"></div>
        <div className="flex flex-col sm:flex-row sm:block ">
            <a
              href="#"
              className=" text-sm px-4 py-2 rounded-md border mt-5 text-center lg:mt-10 text-white border-gray-400 hover:bg-gray-700  transition-colors"
            >
              Log In
            </a>
            <a
              href="#"
              className=" text-sm px-4 py-2 rounded-md border sm:ml-5 mt-5 text-center lg:mt-10 text-white border-gray-400 hover:bg-gray-700 transition-colors"
            >
              Sign Up
            </a>
        </div>
      </div>
    </nav>
  );
};
