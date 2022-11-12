import MainLayout from '../layouts/MainLayout'; 
import { Link } from 'raviger';

function NotFoundPage() {

  return (
<MainLayout>
<div className="text-center my-40 mx-8">
  <h1 className="mb-20 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
   🤔 Not Found <mark className="rounded bg-gradient-to-r from-purple-400 to-purple-800 py-2 px-4 text-white dark:bg-blue-500">
404!</mark>
  </h1>
  <p className="text-lg font-normal text-gray-500 dark:text-gray-400 lg:text-xl pb-10">
  What the what! this page doesn't exist, how the hell did i end up here. is it my bad or their bad. Maybe  i'll check it out later.
  </p>
  <Link href="/" className="py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-purple-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-purple-700 focus:text-purple-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="inline mr-2 w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
</svg>
   Go Home
</Link>
</div>
</MainLayout>
);
}

export default NotFoundPage;
