import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './PersonalForm.css';


function PersonalForm({ currentPage, setCurrentPage, data, update, updateData }) {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <form className="form">
      <h1>Cv Generator</h1>
      <h2>Personal information</h2>

      <p>
        <TextField id="standard-basic" label="name" value={name} onChange={(e) => setName(e.target.value)} />
      </p>
      <p>
        <TextField id="standard-basic" label="surname" value={surname} onChange={(e) => setSurname(e.target.value)} />
      </p>
      <p>
        <TextField id="standard-basic" label="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </p>
      <p>
        <TextField id="standard-basic" label="phone-number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
      </p>
      <Button className="button" variant="contained" color="primary" onClick={() => setCurrentPage(currentPage + 1)} {...data} {...update}>Next</Button>

    </form>
  );
}

export default PersonalForm

