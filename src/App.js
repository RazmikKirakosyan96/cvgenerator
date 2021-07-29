import React, { useState, useStep, useForm } from 'react';
import './App.css';
import PersonalForm from './PersonalForm';
import EducationForm from './EducationForm';
import HobbyForm from './HobbyForm';

const steps = [
  { currentPage: "personal" },
  { currentpage: "education" },
  { currentPage: "hobby" },
  
];

const defaultData = {
  name: "Jane",
  surName: "Doe",
  email: "Jan",
  schoolName: "200 South Main St",
  collegeName: "Anytown",
  universityName: "CA",
  specificationDegree: "90505",
  art: "email@domain.com",
  music: "+61 4252 454 332",
  photography: "",
  science: "",
};


function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const {formData, setForm} = useForm(defaultData);
  const { step, navigation } = useStep({ initialStep: 0, steps });
  
  const props = { formData, setForm, navigation };
  
  
  {/*const { currentPage } = step;
  const [data, setData] = useState({
    "personaldata": {
      "name": "",
      "surname": "",
      "email": "",
      "phoneNumber": ""
    },
    "educationdata": {
      "schoolName": "",
      "collegeName": "",
      "universityName": "",
      "degree": "",
    },
    "hobbydata": ["art", "music", "photography", "science"],
  });*/}
  

  switch (currentPage) {
    case 1:
      return <PersonalForm currentPage={currentPage} setCurrentPage={setCurrentPage} />;
    case 2:
      return <EducationForm currentPage={currentPage} setCurrentPage={setCurrentPage} />;
    case 3:
      return <HobbyForm currentPage={currentPage} setCurrentPage={setCurrentPage} />;
    default:
      return null;
  };
};

export default App;



