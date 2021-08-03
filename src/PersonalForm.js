import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './PersonalForm.css';


function PersonalForm({ currentPage, setCurrentPage, data, update }) {
  return (
    <form className="form">
      <h1>Cv Generator</h1>
      <h2>Personal information</h2>
      <p>
        <TextField id="standard-basic" label="name" value={data.name} onChange={(e) => update("name", e.target.value)} />
      </p>
      <p>
        <TextField id="standard-basic" label="surname" value={data.surname} onChange={(e) => update("surname", e.target.value)} />
      </p>
      <p>
        <TextField id="standard-basic" label="email" value={data.email} onChange={(e) => update("email", e.target.value)} />
      </p>
      <p>
        <TextField id="standard-basic" label="phone-number" value={data.phoneNumber} onChange={(e) => update("phoneNumber", e.target.value)} />
      </p>
      <Button className="button" variant="contained" color="primary" onClick={() => setCurrentPage(currentPage + 1)} {...data} {...update}>Next</Button>

    </form>
  );
}

export default PersonalForm

