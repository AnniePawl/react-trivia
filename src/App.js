import React from 'react';
import Hero from './components/Hero'
import './components/styles/custom.scss'
import loadTriviaData from './trivia'
import Papa from 'papaparse'
import * as d3 from 'd3'

function App() {
  return (
    <div className="app">
      <Hero/>

    </div>
  );
}

export default App;
