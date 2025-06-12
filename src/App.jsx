import React from 'react';
import { useState ,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [fact, setFact] = useState("");
    
  const fetchFact = async () => {
    try {
      const res = await fetch("https://catfact.ninja/fact");
      const data = await res.json();
      setFact(data.fact);
    } catch (err) {
      setFact("Failed to fetch a cat fact. Try again.");
    }
  };


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-white px-4">
      <h1 className="text-3xl font-bold mb-6">🐱 Random Cat Fact</h1>
      <button
        onClick={fetchFact}
        className="bg-blue-600 cursor-pointer hover:bg-blue-500 px-6 py-3 rounded-lg text-white text-lg font-semibold transition-all mb-6"
      >
        Get Cat Fact
      </button>
      {fact && (
        <p className="max-w-xl text-center text-lg text-slate-300 border border-slate-700 bg-slate-800 p-4 rounded-lg">
          {fact}
        </p>
      )}
    </div>
  );
}

export default App;
