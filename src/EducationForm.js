import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './EducationForm.css'

function EducationForm({ currentPage, setCurrentPage, data, update, postData }) {
  return (
    <form className="form">
      <h2>Education information</h2>
      <p>
        <TextField label="school-name" value={data.schoolName} onChange={(e) => update("schoolName", e.target.value)} />
      </p>
      <p>
        <TextField label="college-name" value={data.collegeName} onChange={(e) => update("collegeName", e.target.value)} />
      </p>
      <p>
        <TextField label="university-name" value={data.universityName} onChange={(e) => update("universityName", e.target.value)} />
      </p>
      <p>
        <TextField label="specification degree" value={data.degree} onChange={(e) => update("degree", e.target.value)} />
      </p>
      <Button id="previous" variant="contained" color="primary" onClick={() => setCurrentPage(currentPage - 1)}>Prev</Button>
      <Button id="next" variant="contained" color="primary" onClick={() => setCurrentPage(currentPage + 1)}>Next</Button>
      <Button variant="contained" color="primary" onClick={() => postData()}>Save</Button>
      
    </form>
  );
}

export default EducationForm