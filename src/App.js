import React, { useState } from 'react';

import './App.css';
import PersonalForm from './PersonalForm';
import EducationForm from './EducationForm';
import HobbyForm from './HobbyForm';

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  return (
   <div className='App'>
      function setCurrentPage (props) {
        currentPage = props.currentPage
        switch (currentPage) {
          case 0:
            return <PersonalForm />;
          case 1:
            return <EducationForm />;
          case 2:
            return <HobbyForm />;
          default:
            return null;
        }; 
      } 
    </div>   
  );
};

export default App;

