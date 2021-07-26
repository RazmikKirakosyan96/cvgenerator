import React, { useState }from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


function EducationForm () {
  const[schoolname, setSchoolname] = useState('')
  const[studyname,setStudyname] = useState('')
  const[universityname,setUniversityname] = useState('')
  const[currentPage, setCurrentPage] = useState(1)
    return (
      <form>
        <h1>Hello</h1> 
        <p>The name of your school</p>
        <TextField id="standard-basic" label="school-name" value={schoolname} onChange={(e) => setSchoolname(e.target.value)}/>
        <p>Your field of study </p>
        <TextField id="standard-basic" label="fild-name" value={studyname} onChange={(e) => setStudyname(e.target.value)}/>
        <p>The name of your institute</p>
        <TextField id="standard-basic" label="institute-name" value={universityname} onChange={(e) => setUniversityname(e.target.value)}/>
        <button onClick={() => setCurrentPage(currentPage -1 )}>Prev</button>
        <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
      </form>
    );
}

export default  EducationForm