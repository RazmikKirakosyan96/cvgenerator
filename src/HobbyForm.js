import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function HobbyForm () {
  const [sport,setSport] = useState('')
  const [art,setArt] = useState('')
  const [other,setOther] = useState('')
  const[currentPage, setCurrentPage] = useState(2)
    return (
      <form>
        <h1>Hello</h1>
        <p> A sport that is your hobby:</p>
        <TextField id="standard-basic" label="sport"  value={sport} onChange={(e) => setSport(e.target.value)}/>
        <p>An art form that is your hobby:</p>
        <TextField id="standard-basic" label="art" value={art} onChange={(e) => setArt(e.target.value)}/>
        <p>Please enter your hobby in other cases:</p>
        <TextField id="standard-basic" label="other" value={other} onChange={(e) => setOther(e.target.value)}/>
        <button onClick={() => setCurrentPage(currentPage + 0)}>Prev</button>
        <Button variant="contained" color="primary">Save</Button>

      </form>
    );
}

export default  HobbyForm



