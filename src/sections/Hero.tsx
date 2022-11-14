function Hero() {
  const scrollToAppView = () => {
    //view :String
    const element = document.getElementById('apllication-wrapper');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-hero bg-gray-100 dark:bg-transparent">
      <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
        <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-4xl text-center text-gray-800 dark:text-white font-black leading-7 md:leading-10">
            Ensure Coding standards and Code Quality,
            <span className="text-purple-700"> Conventions Templates </span>
            are now Made Easy.
          </h1>
          <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal text-center text-sm sm:text-lg">
            Provide consistent developer experience across many application
            &amp; teams, using our convention templates generator tool.
            <a
              className="text-purple-700"
              href="https://blog.x-hub.io/importance-of-code-standards-and-conventions/?ref=anmoon-convention-genrator"
              target="_blank"
              rel="noopener noreferrer"
            >
              &nbsp;Read More...
            </a>
          </p>
        </div>
        <div className="flex justify-center items-center">
          <button
            onClick={scrollToAppView}
            className="mr-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 hidden md:block bg-transparent transition duration-150 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-transparent transition duration-150 ease-in-out hover:border-indigo-600 lg:text-xl lg:font-bold  hover:text-indigo-600 rounded border border-indigo-700 text-indigo-700 px-4 sm:px-10 py-2 sm:py-4 text-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="inline w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            New Template
          </button>

          <button
            onClick={scrollToAppView}
            className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-700 bg-purple-700 transition duration-150 ease-in-out hover:bg-indigo-600 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-indigo-700 py-2 sm:py-4 text-sm"
          >
            Explore Templates
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
