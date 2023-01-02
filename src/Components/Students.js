import React from 'react'
import { useState } from 'react';

const Students = (props) => {
    const [students, setStudents] = useState(props.Stud);
    const delstud = (id) => {
        // const index = students.findIndex(x => x.Enrollment_No === id);
        const filterData = students.filter((value) => value.Enrollment_No !== id);
        setStudents(filterData)
        props.returnNewStuds(students);
    }

    const updstud = (id) => {
        alert(id);
    }
  return (
    <>
    <br /><br />
      <table border = '2' cellPadding = '8' cellSpacing = '8'>
        <tr>
            <th>Enrollment_No</th>
            <th>Name</th>
            <th>Department</th>
            <th>Tution_Fees_Status</th>
            <th>Year</th>
            <th>Delete</th>
            <th>Update</th>
        </tr>
            {props.Stud.map((Stud) => {return (
                <>
                    <tr>
                        <td>{Stud.Enrollment_No}</td>
                        <td>{Stud.Name}</td>
                        <td>{Stud.Department}</td>
                        <td>{Stud.Tution_Fees_Status}</td>
                        <td>{Stud.Year}</td>
                        <td><button onClick = {() => delstud(Stud.Enrollment_No)}>Delete</button></td>
                        <td><button onClick = {() => updstud(Stud.Enrollment_No)}>Update</button></td>
                    </tr>
                   
                </>
            )})}
         </table>
    </>
  )
}

export default Students