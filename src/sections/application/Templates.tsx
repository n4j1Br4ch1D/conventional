function Templates() {
  const templates = [
    {
      id: 1,
      title: 'Xbank project',
      screenshot: 'view.png',
      description: 'the XBank new edition 2022',
      technologies: [
        'PHP',
        'Vuejs',
        'Laravel',
        'Bootstrap5',
        'SASS',
        'Typescript',
        'HTML5',
        'SVG',
      ],
      owner_id: 1,
      created_at: '',
      updated_at: '',
      content: ` 
    # Header 1
    ## Header 2
  
    _ italic _
  
    ** bold **
    <b> bold Html </b>
   
    `,
    },
    {
      id: 2,
      title: 'XPay project',
      screenshot: 'view.png',
      description: 'the XBank new edition 2022',
      technologies: ['php', 'laravel', 'tailwindcss'],
      owner_id: 1,
      created_at: '',
      updated_at: '',
      content: ` 
    # Header 1
    ## Header 2
  
    _ italic _
  
    ** bold **
    <b> bold Html </b>
   
    `,
    },
  ];

  /*

// get filters

// search & filter elems

*/

  return (
    <div className="templates">
      <header className="text-center">
        <div className="m-auto bg-gray-200 p-2 w-8 h-8 rounded-full mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="block m-auto w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5"
            ></path>
          </svg>
        </div>
        <h2 className=" text-md mb-8">Explore Our Templates</h2>
      </header>

      <div className="grid grid-cols-4 gap-4">
        {templates.map((template) => {
          return (
            <div key={template.id} className="flex justify-center">
              <div className="border border-gray-300 rounded-md shadow-md bg-white w-full max-w-sm">
                <div className="p-2 bg-gray-300">
                  <img
                    className="rounded-md"
                    src={'img/templates/' + template.screenshot}
                    alt={template.title}
                  />
                </div>
                <div className="p-3">
                  <h5 className="text-gray-900 text-xl font-medium mb-2">
                    {template.title}
                  </h5>
                  {template.technologies.map((technology) => {
                    return (
                      <span className="inline-block bg-gray-500 text-purple-100 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900">
                        {technology}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col items-center mt-10">
        <span className="text-sm text-gray-700 dark:text-gray-400">
          Showing{' '}
          <span className="font-semibold text-gray-900 dark:text-white">1</span>{' '}
          to{' '}
          <span className="font-semibold text-gray-900 dark:text-white">
            10
          </span>{' '}
          of{' '}
          <span className="font-semibold text-gray-900 dark:text-white">
            100
          </span>{' '}
          Entries
        </span>
        <div className="inline-flex mt-2 xs:mt-0">
          <button className="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            <svg
              aria-hidden="true"
              className="mr-2 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            Prev
          </button>
          <button className="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-r border-0 border-l border-gray-700 hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            Next
            <svg
              aria-hidden="true"
              className="ml-2 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Templates;
