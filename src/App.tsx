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
            <div className="flex my-6 items-center w-full space-y-4 md:space-x-4 md:space-y-0 flex-col md:flex-row"></div>
            <div className="flex items-center space-x-4"></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
