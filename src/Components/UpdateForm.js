import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateForm = (props) => {
    const navigate = useNavigate()
    const params = useParams()
    
    const [id, setId] = useState(params.id);
    const [name, setName] = useState();
    const [dept, setDept] = useState();
    const [tution, setTution] = useState();
    const [year, setYear] = useState();
    const students = props.Stud;
    
    useEffect(() => { 
        let oneStud = students.find(value => value.Enrollment_No === Number(id));
        setId(oneStud.Enrollment_No);
        setName(oneStud.Name)
        setDept(oneStud.Department)
        setTution(oneStud.Tution_Fees_Status)
        setYear(oneStud.Year)
    }, []);
    
    const onsubmit = () => {
        const NewS = [{
          'Enrollment_No' : id,
          'Name' : name,
          'Department' : dept,
          'Tution_Fees_Status' : tution,
          'Year' : year
        }]
        const newlist = students.reduce((acc, value) => value.Enrollment_No === id ? acc.concat(NewS) : acc.concat(value), []);
        props.returnNewStud(newlist);
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
          <td><input type  = 'text' value = {id} name = 'enrollmentno' onChange = {(e) => setId(e.target.value)} /></td> 
        </tr>
        <tr>
          <td>Name</td>
          <td><input type  = 'text' value = {name} name = 'name' onChange = {(e) => setName(e.target.value)} /></td> 
        </tr>
        <tr>
          <td>Department</td>
          <td><input type  = 'text' value = {dept} name = 'department' onChange = {(e) => setDept(e.target.value)} /></td> 
        </tr>
        <tr>
          <td>Tution Fees Status</td>
          <td><input type  = 'text' value = {tution} name = 'tutionfeesstatus' onChange = {(e) => setTution(e.target.value)} /></td> 
        </tr>
        <tr>
          <td>Year</td>
          <td><input type  = 'text' value = {year} name = 'year' onChange = {(e) => setYear(e.target.value)} /></td> 
        </tr>
        <tr>
          <td colSpan = '2' align = 'center'><button onClick = {onsubmit}>Submit</button></td> 
        </tr>
      </table>
    </>
  )
}

export default UpdateForm