import { useParams } from "react-router-dom";
import Base from "../Base/Base";
import React from "react";
const TeacherProfile = ({teachersData}) =>{
    const {id} = useParams();
    const selectedObject = teachersData[id];

    return(
   <Base
   title ="Teachers Profile"
   description = "Individual teacher's profile">
        <div className='profile'>
            
            <h3>Teacher's Name:{selectedObject.name}</h3>
            <p className='details'>secondaryJob:{selectedObject.secondaryJob}</p>
            <p className='details'>Company:{selectedObject.company}</p>
            <p className='details'>primaryJob:{selectedObject.primaryJob}</p>
            <p className='details'>Experience:{selectedObject.experience}</p>

        </div>
   </Base>
    )
}

export default TeacherProfile;