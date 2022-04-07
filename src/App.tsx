import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React + Typescript + Tailwind!</p>
      </header>
      <div className="flex justify-center items-center w-screen h-screen bg-gray-900 ">
        <div className="w-3/12 p-6 mx-auto rounded text-center bg-gray-800 space-y-5">
          <h1 className="text-white text-4xl">It's working</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
