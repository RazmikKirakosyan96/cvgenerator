import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import PersonalForm from './PersonalForm';
import EducationForm from './EducationForm';
import HobbyForm from './HobbyForm';

function App() {
  return (
    <div className='App'>
      <PersonalForm />
      <EducationForm  />
      <HobbyForm />
      </div>  
  );
};


export default App;
