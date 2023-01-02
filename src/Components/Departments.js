import React from 'react'

const Departments = (props) => {
  return (
    <>
        <ul>
            {props.Depts.map((Depts) => {return (
                <li>{Depts.ID}&nbsp;&nbsp;{Depts.Name}</li>
            )})}
        </ul> 
    </>
  )
}

export default Departments
