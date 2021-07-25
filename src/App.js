import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import personal_form from './personal_info';
import education_form from './education_info';
import hobby_form from './personal_info';

function App() {
  return (
    <div className='App'>
      <personal_form />
      <education_form />
      <hobby_form />
      </div>  
  );
};


export default App;
