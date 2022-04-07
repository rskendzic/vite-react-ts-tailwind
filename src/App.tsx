import { FC } from 'react';
import './App.css';
import { Navigation } from './components/Navigation';

const App: FC = () => {
  return (
    // https://www.tailwind-kit.com/templates/datadashboard
    <main className="bg-gray-100 dark:bg-gray-800 h-screen overflow-hidden relative">
      <div className="flex items-start justify-between">
        <div className="h-screen hidden lg:block shadow-lg relative w-80">
          <div className="bg-white h-full dark:bg-gray-700">
            <div className="flex items-center justify-start pt-6 ml-8">
              <p className="font-bold dark:text-white text-xl">Plannifer</p>
            </div>
            <Navigation />
          </div>
        </div>
        <div className="flex flex-col w-full md:space-y-4">
          <header className="w-full h-16 z-40 flex items-center justify-between"></header>
          <div className="overflow-auto h-screen pb-24 px-4 md:px-6">
            <h1 className="text-4xl font-semibold text-gray-800 dark:text-white">
              Good afternoom, Charlie
            </h1>
            <h2 className="text-md text-gray-400">
              Here&#x27;s what&#x27;s happening with your ambassador account
              today.
            </h2>
            <div className="flex my-6 items-center w-full space-y-4 md:space-x-4 md:space-y-0 flex-col md:flex-row">
              <form method="POST">
                <div className="shadow sm:rounded-md sm:overflow-hidden">
                  <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                    <div className="grid grid-cols-3 gap-6">
                      <div className="col-span-3 sm:col-span-2">
                        <label
                          htmlFor="company-website"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Website
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                          <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                            http://
                          </span>
                          <input
                            type="text"
                            name="company-website"
                            id="company-website"
                            className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                            placeholder="www.example.com"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="flex items-center space-x-4"></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
