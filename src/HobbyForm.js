import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';




function HobbyForm() {
  const [,] = useState('')
  const [,] = useState('')
  const [,] = useState('')
  return (
    <form>
      <h1>Hello</h1>
      <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
      <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
      <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
      <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
      <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
      
    </form>
  );
}

export default HobbyForm



{/* const setCurrentPage = (props) => {
      const currentPage = props.currentPage;
      switch (currentPage) {
        case 0:
          return <PersonalForm />;
        case 1:
          return <EducationForm />;
        case 2:
          return <HobbyForm />;
        default:
          return null;*/}