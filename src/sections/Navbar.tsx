import { Link } from 'raviger'
import logo from './../imgs/conventional-logo.svg';

function Navbar() {
  return (

<nav className="w-full border-b">
                <div className="py-5 md:py-0 container mx-auto px-6 flex items-center justify-between">
                    <div aria-label="Home. logo" role="img">
                       <Link href="/" className="flex items-center mb-4 sm:mb-0">
                           <img src={logo} className="mr-2 h-8" alt="Conventional Logo" />
                           <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Conventional</span>
                       </Link>
                    </div>
                    <div>
                        <button className="dark:bg-white rounded sm:block md:hidden text-gray-500 hover:text-gray-700 dark:text-gray-200 focus:text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500">
                            <svg aria-haspopup="true" aria-label="open Main Menu" xmlns="http://www.w3.org/2000/svg" className="md:hidden icon icon-tabler icon-tabler-menu" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round">
                                <path stroke="none" d="M0 0h24v24H0z"></path>
                                <line x1="4" y1="8" x2="20" y2="8"></line>
                                <line x1="4" y1="16" x2="20" y2="16"></line>
                            </svg>
                        </button>
                        <div id="menu" className="md:block lg:block hidden">
                            <button className="dark:bg-white rounded block md:hidden lg:hidden text-gray-500 hover:text-gray-700 dark:text-gray-200 focus:text-gray-700 dark:text-gray-200 fixed focus:outline-none focus:ring-2 focus:ring-gray-500 z-30 top-0 mt-6">
                                <svg aria-label="close main menu" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>
                            <ul className="flex text-3xl md:text-base items-center py-10 md:flex flex-col md:flex-row justify-center fixed md:relative top-0 bottom-0 left-0 right-0 bg-white md:bg-transparent z-20">
                                <li className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-300 cursor-pointer text-base lg:text-lg pt-10 md:pt-0">
                                    <a href="javascript: void(0)">Home</a>
                                </li>
                                <li className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-300 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                                    <a href="javascript: void(0)">How It Works?</a>
                                </li>
                                <li className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-300 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                                    <a href="javascript: void(0)">Anmoon</a>
                                </li>
                                <li className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-300 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                                    <a href="javascript: void(0)">XHub</a>
                                </li>
                                <li className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-300 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                                    <a href="javascript: void(0)">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <button disabled className="focus:outline-none lg:text-lg lg:font-bold focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 hidden md:block bg-transparent transition duration-150 ease-in-out hover:bg-gray-200 rounded border border-indigo-700 text-indigo-700 px-4 sm:px-8 py-1 sm:py-3 text-sm">Sign In</button>
                </div>
            </nav>

  );
}

export default Navbar;
