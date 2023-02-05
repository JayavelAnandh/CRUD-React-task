import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Base from "../Base/Base";

function TeacherDetails({teachersData,setTeachersData}){
    const history = useHistory(null);

    useEffect(()=>{
      if (!localStorage.getItem("user-name")){
        history.replace("/register")
      }
      })

    const deleteTeachersData= async(id)=>{
        try {
          const deleteTeacherResponse = await fetch(`https://63ae590dceaabafcf177e630.mockapi.io/teachersData/${id}`,
          
          {
            method:"DELETE",
            
          });
          const newTeachersData = await deleteTeacherResponse.json();
          setTeachersData(newTeachersData);
          
        } catch (error) {
          console.log(error)
        }
        const unselecteds = teachersData.filter((data)=>data.id != id);
        setTeachersData(unselecteds);
    }

    return(
        <Base
      title = "Batch B-42WD"
      description= "Teachers details"
      >
        <h3>This page contains details of Staffs of an Organization</h3>
        <div className="containers">
            <Button color="info" variant="outlined" onClick={()=>{history.push("/add-teacher")}}> 
                Add a new Teacher
            </Button>
            <div className="card-containers">
                {
                    teachersData.map((obj,index)=>(
                        <Card sx={{ maxWidth: 345 }} key={index} className="card">
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Name : {obj.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Secondary-Job: {obj.secondaryJob}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                   Primary-Job: {obj.company}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Job-Role: {obj.primaryJob} 
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Experience(in years):{obj.experience} 
                </Typography>
              </CardContent>
              <CardActions>
                <Button 
                onClick={() => history.push(`/edit-teacher/${index}`)}
                 color="secondary">Edit</Button>
                <Button onClick={()=>deleteTeachersData(obj.id)} color="error">Delete</Button>
                <Button onClick={()=>history.push(`/teachersProfile/${index}`)}>View details</Button>
              </CardActions>
            </Card>
                    ))
                }
            </div>

        </div>
      </Base>
    )
}
export default TeacherDetails;