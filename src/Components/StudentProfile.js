import React from 'react'
import { useParams } from 'react-router-dom';
import Base from '../Base/Base'
import './StudentProfile.css'
const StudentProfile = ({studentsData}) => {
    const {id} = useParams();
    const student = studentsData[id]
  return (
    <Base
    title="Student Profile"
    description= "Inidividual Student Details"
    >
      <div className='profile'>
        <h3>Student Name: {student.name}</h3>
        <p className='details'> Gender: {student.gender} </p>
        <p className='details'>Batch : {student.batch} </p>
        <p className='details'>Years of  Experience: {student.yearsOfExperience}</p>
      </div>
    </Base>
  )
}

export default StudentProfile;