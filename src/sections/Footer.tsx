import { Link } from 'raviger';
import logo from './../imgs/conventional-logo.svg';

function Footer() {
  return (
    <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
      <div className="sm:flex sm:items-center sm:justify-between">
        <Link href="/" className="flex items-center mb-4 sm:mb-0">
          <img src={logo} className="mr-2 h-8" alt="Conventional Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Conventional
          </span>
        </Link>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <a href="/" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <Link
              href="privacy-policy"
              className="mr-4 hover:underline md:mr-6"
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="/licensing" className="mr-4 hover:underline md:mr-6 ">
              Licensing
            </Link>
          </li>
          <li>
            <a
              className="hover:underline"
              href="https://anmoonweb.com/?ref=anmoon-convention-genrator#contact"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022
        <Link href="/licensing" className="hover:underline">
          {' '}
          Conventional
        </Link>
        . All Rights Reserved.
      </span>
    </footer>
  );
}

export default Footer;
