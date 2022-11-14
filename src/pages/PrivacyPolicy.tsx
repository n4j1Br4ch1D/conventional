import MainLayout from '../layouts/MainLayout';

function PrivacyPolicy() {
  return (
    <MainLayout>
      <div className="text-center my-40 mx-8">
        <h1 className="mb-20 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          📖 Privacy{' '}
          <mark className="rounded bg-gradient-to-r from-purple-400 to-purple-800 py-2 px-4 text-white dark:bg-blue-500">
            Policy
          </mark>
        </h1>
        <p className="text-lg font-normal text-gray-500 dark:text-gray-400 lg:text-xl">
          Here at Flowbite we focus on markets where technology, innovation, and
          capital can unlock long-term value and drive economic growth.
        </p>
      </div>
    </MainLayout>
  );
}

export default PrivacyPolicy;
