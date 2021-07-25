import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

function MyForm () {
  return (
    <div className='index'>
      <App />
     </div>
    );
}
ReactDOM.render(<MyForm />, document.getElementById('root'));

