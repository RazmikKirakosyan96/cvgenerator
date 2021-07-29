import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './EducationForm.css'

function EducationForm({ currentPage, setCurrentPage }) {
  const [schoolName, setSchoolName] = useState('');
  const [collegeName, setCollegeName] = useState('');
  const [universityName, setUniversityName] = useState('');
  const [degree, setDegree] = useState('');


  return (
    <form className="form">
      <h2>Education information</h2>
      <p>
        <TextField label="school-name" value={schoolName} onChange={(e) => setSchoolName(e.target.value)} />
      </p>
      <p>
        <TextField label="college-name" value={collegeName} onChange={(e) => setCollegeName(e.target.value)} />
      </p>
      <p>
        <TextField label="university-name" value={universityName} onChange={(e) => setUniversityName(e.target.value)} />
      </p>
      <p>
        <TextField label="specification degree" value={degree} onChange={(e) => setDegree(e.target.value)} />
      </p>
      <Button id="previous" variant="contained" color="primary" onClick={() => setCurrentPage(currentPage - 1)}>Prev</Button>
      <Button id="next" variant="contained" color="primary" onClick={() => setCurrentPage(currentPage + 1)}>Next</Button>
    </form>
  );
}

export default EducationForm