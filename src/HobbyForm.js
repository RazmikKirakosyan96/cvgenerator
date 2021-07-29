import React, { useState } from 'react';
import './HobbyForm'
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

function HobbyForm({ currentPage, setCurrentPage }) {
  const [art, setArt] = useState('');
  const [music, setMusic] = useState('');
  const [photography, setPhotography] = useState('');
  const [science, setScience] = useState('');

  return (
    <form className="form">
      <h2>Hobby information</h2>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox checked={art} onChange={setArt} />}
          label="art"
        />
        <FormControlLabel
          control={<Checkbox checked={music} onChange={setMusic} />}
          label="music"
        />
        <FormControlLabel
          control={<Checkbox checked={photography} onChange={setPhotography} />}
          label="photography"
        />
        <FormControlLabel
          control={<Checkbox checked={science} onChange={setScience} />}
          label="science"
        />
      </FormGroup>

      <Button variant="contained" color="primary" onClick={() => setCurrentPage(currentPage - 1)}>Prev</Button>
      <Button variant="contained" color="primary">Save</Button>
    </form>

  )
};

export default HobbyForm


