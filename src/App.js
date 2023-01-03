import './App.css';
import { Routes, Route } from "react-router-dom"
import Header from './Components/Header';
import Dashboard from './Components/Dashboard';
import Department from './Components/Departments';
import Students from './Components/Students';
import Form from './Components/Form';
import { useState } from 'react';

function App() {
  const[dept, setDept] =  useState([{'ID' : 1, 'Name' : 'DCS'}, {'ID' : 2, "Name" : 'DOE'}, {'ID' : 3, "Name" : 'DOJ'}, {'ID' : 2, "Name" : 'DSS'}]);
  const [stud, setStud] = useState([{'Enrollment_No' : 1, 'Name' : 'Chirag', 'Department' : 'DCS', 'Tution_Fees_Status' : 'Yes', 'Year' : '2nd'},
                                    {'Enrollment_No' : 2, 'Name' : 'Khushi', 'Department' : 'DCS', 'Tution_Fees_Status' : 'Yes', 'Year' : '2nd'},
                                    {'Enrollment_No' : 3, 'Name' : 'Shruti', 'Department' : 'DCS', 'Tution_Fees_Status' : 'Yes', 'Year' : '2nd'}]);
  const newStuds = (Studs) => {
    setStud(Studs);
  }

  function AddNewStud (NewS) {
    setStud(stud.concat(NewS));
  }

  return (
    <>
    <Header />
      <Routes>
        <Route path = '/' element = { <Dashboard /> } exact />
        <Route path = '/Dashboard' element = { <Dashboard /> } exact />
        <Route path = '/Department' element = { <Department Depts = {dept} /> } exact />
        <Route path = '/Students' element = { <Students Stud = {stud} returnNewStuds = {newStuds} /> } exact />
        <Route path = '/Form' element = { <Form returnNewStud  = {AddNewStud}/> } exact />
      </Routes>
    </>
  );
}

export default App;
