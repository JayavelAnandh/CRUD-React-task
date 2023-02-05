import { AppBar, Button, Toolbar } from '@mui/material'
import React from 'react'

import { useHistory } from 'react-router-dom'

const element = <h1>hi</h1>

function Base({ title, description, children }) {
   // react navigator
   const history = useHistory();

   const logoutMethod = () => {
      localStorage.removeItem("user-name")
      history.push("/register");
   }

   return (
      <div className='main-component base-component'>
         <AppBar position='static'>
            <Toolbar variant='dense'>
               <Button
                  color='inherit'
                  onClick={() => history.push("/dashboard")}>
                  <span className="icon"></span>
                  <span className="nav-name">DashBoard</span>
               </Button>

               <Button
                  color='inherit'
                  onClick={() => history.push("/details")}>
                  <span className="icon"></span>
                  <span className="nav-name">Students List</span>
               </Button>

               <Button
                  color='inherit'
                  onClick={() => history.push("/add-data")}>
                  <span className="icon"></span>
                  <span className="nav-name">Add Student</span>
               </Button>
               <Button
                  color='inherit'
                  onClick={() => history.push("/teacher-details")}>
                  <span className="icon"></span>
                  <span className="nav-name">TeachersList</span>
               </Button>
               <Button
                  color='inherit'
                  onClick={() => history.push("/add-teacher")}>
                  <span className="icon"></span>
                  <span className="nav-name">Add Teacher</span>
               </Button>

               <Button
                  color='inherit'
                  onClick={logoutMethod}>
                  <span className="icon"></span>
                  <span className="nav-name">Logout</span>
               </Button>





            </Toolbar>
         </AppBar>
         <header>
            <h1 className='heading'>{title}</h1>
         </header>
         <main className='main-segment'>
            <h2>{description}</h2>

            <div>
               {children}
            </div>
         </main>

      </div>
   )
}

export default Base;