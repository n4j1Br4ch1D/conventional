function TemplateForm() {
  return (
    <div className="new text-center">
      <div className="p-8 rounded border-dashed border-2 border-gray-300">
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-400"
          >
            Write a Title
          </label>
          <input
            type="text"
            id="username-success"
            className="bg-green-50 border border-gray-300 text-gray-900 placeholder-gray-400 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400"
            placeholder="Bonnie Green"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="message"
            className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-400"
          >
            Select Technlogies
          </label>
        </div>

        <div className="mb-6">
          <label
            htmlFor="message"
            className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-400"
          >
            Some Description
          </label>
        </div>

        <div className="mb-6">
          <button
            type="button"
            className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
          >
            Start Building
            <svg
              aria-hidden="true"
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TemplateForm;
