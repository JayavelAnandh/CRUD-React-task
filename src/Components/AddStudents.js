import { Button, TextField } from '@mui/material'
import React , { useState }  from 'react'
import { useHistory } from 'react-router-dom'
import Base from '../Base/Base'

const AddStudents = ({studentsData, setStudents}) => {
    const history = useHistory();
    const [name, setName] = useState("");
    const [batch, setBatch] = useState("");
    const [gender, setGender] = useState("");
    const [experience, setExperience] = useState("");


    // function to add a new student's data
    const addNewStudent = async(event) => {
      event.preventDefault();
      try{
        const newStudent = {
          name,
          batch,
          gender,
          yearsOfExperience : experience
          
      }

       const response = await fetch("https://63ae590dceaabafcf177e630.mockapi.io/studentsData",{
        method:"POST",
        body:JSON.stringify(newStudent),
        headers:
        {
          "Content-Type":"application/json"
        }
      });
      const lastAddedData = await response.json()
      console.log(response);
     setStudents([].concat([...studentsData,lastAddedData]))
     history.push("/details") 

     setName("")
     setBatch("")
     setGender("")
     setExperience("")
     
    }
    catch(error){
        console.log(error);
    }
      };
        


  return (
    <Base
    title = "Add A Student"
    description= "Fill the form below to add a data of your own"
    >
              <div className="input-section">
     
        

     <TextField 
     fullWidth 
     label="Enter the Name"
     onChange={(event)=>setName(event.target.value)}
     value= {name}
      id="fullWidth" />

     <TextField 
     fullWidth 
     label="Enter the Batch"
     onChange={(event)=>setBatch(event.target.value)}
     value = {batch}
      id="fullWidth" />

     <TextField 
     fullWidth 
     label="Enter the Gender"
     onChange={(event)=>setGender(event.target.value)}
     value = {gender}
      id="fullWidth" />

     <TextField 
     fullWidth 
     label="Enter the Experience"
     onChange={(event)=>setExperience(event.target.value)}
     value = {experience}
      id="fullWidth" />
 
     <Button
       className="add-btn"
       color="success"
       variant="contained"
       onClick={addNewStudent}
     >
       Add Data
     </Button>


   </div>
    </Base>
  )
}

export default AddStudents
