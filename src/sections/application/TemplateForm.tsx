import Multiselect from 'multiselect-react-dropdown';
import { useState } from 'react';

function TemplateForm() {
  const [technlogies, setTechnlogies] = useState([
    { id: 1, name: 'JAVA' },
    { id: 2, name: 'Typescript' },
    { id: 3, name: 'React' },
    { id: 4, name: 'PHP' },
  ]);

  const [selectedTechnlogies, setSelectedTechnlogies] = useState([
    { id: 1, name: 'JAVA' },
    { id: 2, name: 'Typescript' },
  ]);

  return (
    <div className="new text-left">
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
            className="bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-400 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-400"
            placeholder="My Project Conventions"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="message"
            className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-400"
          >
            Select Technlogies
          </label>
          <Multiselect
            options={technlogies}
            selectedValues={selectedTechnlogies}
            displayValue="name"
            style={{
              chips: {
                background: '#7e22ce',
              },
              option: {
                background: '#7e22ce',
              },
              searchBox: {
                'border-radius': '8px',
              },
            }}
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="message"
            className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-400"
          >
            Some Description
          </label>
          <textarea
            id="message"
            rows={4}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your description here..."
          ></textarea>
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
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TemplateForm;
