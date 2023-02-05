import {
    Button,
    Card,
    CardActions,
    CardContent,
    Typography,
  } from "@mui/material";
  import React, {useEffect} from "react";
  import { useHistory } from "react-router-dom";
  import Base from "../Base/Base";
  import './Students.css'
  
  export function StudentDetails({studentsData, setStudents}) {
    const history = useHistory();
  
  useEffect(()=>{
  if (!localStorage.getItem("user-name")){
    history.replace("/register")
  }
  })
  
  
    //delete a new data
    const deleteStudentData = async(ID) =>{
    try{
     await fetch(`https://63ae590dceaabafcf177e630.mockapi.io/studentsData/${ID}`,{
      method:"DELETE",

     });
     const selectedStudents = studentsData.filter((stud)=> stud.id !== ID);
     setStudents(selectedStudents); 
    }
    catch(error){
        console.log(error);
    }
  }
  
    return (
      <Base
      title = "Batch B-42WD"
      description= "All students details"
      >
      <div className="containers">
        
        <div className="card-containers">
          {studentsData.map((stud, index) => (
            <Card sx={{ maxWidth: 345 }} key={index} className="card">
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Name : {stud.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Batch : {stud.batch}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Gender : {stud.gender}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Experience : {stud.yearsOfExperience} years
                </Typography>
              </CardContent>
              <CardActions>
                <Button 
                onClick={() => history.push(`/edit/${index}`)}
                 color="secondary">Edit</Button>
                <Button onClick={()=>deleteStudentData(stud.id)} color="error">Delete</Button>
                <Button onClick={()=>history.push(`/student/${index}`)}>View Student</Button>
              </CardActions>
            </Card>
          ))}
        </div>
      </div>
      </Base>
    );
  }
  