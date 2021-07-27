import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


function EducationForm() {
  const [schoolname, setSchoolname] = useState('');
  const [universityname, setUniversityname] = useState('');
  const [studyname, setStudyname] = useState('');
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <form>
      <h1>Hello</h1>
      <p>The name of your school</p>
      <TextField label="school-name" value={schoolname} onChange={(e) => setSchoolname(e.target.value)} />
      <p>The name of your institute</p>
      <TextField label="institute-name" value={universityname} onChange={(e) => setUniversityname(e.target.value)} />
      <p>Your field of study </p>
      <TextField label="fild-name" value={studyname} onChange={(e) => setStudyname(e.target.value)} />
      <Button variant="contained" color="primary" onClick={() => setCurrentPage(currentPage - 1)}>Prev</Button>
      <Button variant="contained" color="primary" onClick={() => setCurrentPage(currentPage + 1)}>Next</Button>
    </form>
  );
}

export default EducationForm