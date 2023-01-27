import { Button, TextField } from '@mui/material'
import React , { useState }  from 'react'
import { useHistory } from 'react-router-dom'
import Base from '../Base/Base'

const AddStudents = ({studentsData, setStudents}) => {
    const history = useHistory();
    const [name, setName] = useState("");
    const [batch, setBatch] = useState("");
    const [id, setId] = useState("");
    const [gender, setGender] = useState("");
    const [experience, setExperience] = useState("");

    const addNewStudent = () => {
        const newStudent = {
            id,
            name,
            batch,
            gender,
            yearsOfExperience : experience
        }
       setStudents([...studentsData, newStudent])
       setId("")
       setName("")
       setBatch("")
       setGender("")
       setExperience("")
       history.push("/details")
      };


  return (
    <Base
    title = "Add A Student"
    description= "You can a student data here"
    >
              <div className="input-section">
     
        
     <TextField 
     fullWidth label="Enter the id" 
     onChange={(event)=>setId(event.target.value)}
     value = {id}
     id="fullWidth" />

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
