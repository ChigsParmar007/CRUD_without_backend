import React from 'react'

const Form = (props) => {
  const onsubmit = () => {
    alert("ok");
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
          <td><input type  = 'text' name = 'enrollmentno' /></td> 
        </tr>
        <tr>
          <td>Name</td>
          <td><input type  = 'text' name = 'name' /></td> 
        </tr>
        <tr>
          <td>Department</td>
          <td><input type  = 'text' name = 'department' /></td> 
        </tr>
        <tr>
          <td>Tution Fees Status</td>
          <td><input type  = 'text' name = 'tutionfeesstatus' /></td> 
        </tr>
        <tr>
          <td>Year</td>
          <td><input type  = 'text' name = 'year' /></td> 
        </tr>
        <tr>
          <td colSpan = '2' align = 'center'><button onClick = {onsubmit}>Submit</button></td> 
        </tr>
      </table>
    </>
  )
}

export default Form