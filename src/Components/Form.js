import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Form = (props) => {
  const [id, setId] = useState();
  const [name, setName] = useState();
  const [dept, setDept] = useState();
  const [tution, setTution] = useState();
  const [year, setYear] = useState();

  const navigate = useNavigate();

  const onsubmit = () => {
    const NewS = [{
      'Enrollment_No' : id,
      'Name' : name,
      'Department' : dept,
      'Tution_Fees_Status' : tution,
      'Year' : year
    }]
    props.returnNewStud(NewS);
    navigate('/Students');
  }
  return (
    <>
    <br />
      <table border = '2' align = 'center' cellPadding = '8' cellSpacing = '8'>
        <tr>
          <th colSpan = '2'>Insert / Update</th>
        </tr>
        <tr>
          <td>Enrollment No</td>
          <td><input type  = 'text' name = 'enrollmentno' onChange = {(e) => setId(e.target.value)} /></td> 
        </tr>
        <tr>
          <td>Name</td>
          <td><input type  = 'text' name = 'name' onChange = {(e) => setName(e.target.value)} /></td> 
        </tr>
        <tr>
          <td>Department</td>
          <td><input type  = 'text' name = 'department' onChange = {(e) => setDept(e.target.value)} /></td> 
        </tr>
        <tr>
          <td>Tution Fees Status</td>
          <td><input type  = 'text' name = 'tutionfeesstatus' onChange = {(e) => setTution(e.target.value)} /></td> 
        </tr>
        <tr>
          <td>Year</td>
          <td><input type  = 'text' name = 'year' onChange = {(e) => setYear(e.target.value)} /></td> 
        </tr>
        <tr>
          <td colSpan = '2' align = 'center'><button onClick = {onsubmit}>Submit</button></td> 
        </tr>
      </table>
    </>
  )
}

export default Form