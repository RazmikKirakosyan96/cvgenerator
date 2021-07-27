import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import setCurrentPage from './App';
import Button from '@material-ui/core/Button';

function PersonalForm(props) {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  return (
    <form>
      <h1>Cv Generator</h1>
      <p>Please enter your name</p>
      <TextField id="standard-basic" label="name" value={name} onChange={(e) => setName(e.target.value)} />
      <p>Please enter your surname</p>
      <TextField id="standard-basic" label="surname" value={surname} onChange={(e) => setSurname(e.target.value)} />
      <p>Please enter your email</p>
      <TextField id="standard-basic" label="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      
      <Button variant="contained" color="primary" onClick={() => setCurrentPage(currentPage + 1)}>Next</Button>
    </form>
  );
}

export default PersonalForm

