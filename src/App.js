import React, { useState } from 'react';
import './App.css';
import PersonalForm from './PersonalForm';
import EducationForm from './EducationForm';
import HobbyForm from './HobbyForm';


function App() {
  const [currentPage, setCurrentPage] = useState(1);
  var [data, setData] = useState({
    "name": "",
    "surname": "",
    "email": "",
    "phoneNumber": "",
    "schoolName": "",
    "collegeName": "",
    "universityName": "",
    "degree": "",
    //"hobbydata": ["art", "music", "photography", "science"],
  });

  function updateData(key, newData) {
    setData(data => {
      return { ...data, [key]: newData }
    });
  };

  async function postData() {
    await fetch('/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "name": data.name,
        "surname": data.surname,
        "email": data.email,
        "phoneNumber": data.phoneNumber,
        "schoolName": data.schoolName,
        "collegeName": data.collegeName,
        "universityName": data.universityName,
        "degree": data.degree,
      })
    });
  }

//   async function getPdf() {
//     let cvData = {};
//     await (async () => {
//       const rawResponse = await fetch('get', {
//         method: 'GET',
//         headers: {
//           'responseType': 'blob',
//           'Content-Type': 'application/json'
//         },
//       });
//       cvData = await rawResponse;
//     })();
  
//     return cvData;
// }


  switch (currentPage) {
    case 1:
      return <PersonalForm currentPage={currentPage} setCurrentPage={setCurrentPage} data={data} update={updateData} />;
    case 2:
      return <EducationForm currentPage={currentPage} setCurrentPage={setCurrentPage} data={data} update={updateData} postData={postData} />;
    case 3:
      return <HobbyForm currentPage={currentPage} setCurrentPage={setCurrentPage} data={data.hobbydata} update={updateData} />;
    default:
      return null;
  };
};

export default App;



