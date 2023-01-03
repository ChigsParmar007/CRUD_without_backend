import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <nav>
        || &nbsp; <NavLink to = "" >Home</NavLink>&nbsp;  || &nbsp;
        <NavLink to = "Dashboard" >Dashboard</NavLink>&nbsp; || &nbsp;
        <NavLink to = "Department" >Department</NavLink>&nbsp; || &nbsp;
        <NavLink to = "Students" >Students</NavLink> &nbsp; || &nbsp;
        <NavLink to = "Form" >Form</NavLink> &nbsp; ||
      </nav>
    </>
  )
}

export default Header