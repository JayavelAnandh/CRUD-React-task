import React from "react";
import Base from "../Base/Base";
import { useHistory } from 'react-router-dom'
import { Button } from '@mui/material'
const WelcomePage = () => {
  const history = useHistory();
  return (
    <Base
      title="Welcome to our Students & Teachers 🎓 Statistics App"
      description="This was build to Store Data about our Organization"
    >
      <br></br>
      <h3>
      Please choose who you are to navigate
      </h3>
      <hr></hr>
     <span>
        <h3>I'm a student</h3>
        <Button 
        variant='outlined'
        color='primary'
        size = "large"
        onClick={()=>history.push("/details")}>
        
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdS2gxZaPTe5hTxWUpboIVJWZ143u7GEatIQ&usqp=CAU' alt=""/>
        </Button></span>
        <hr></hr>
        <span>
          <h3>I'm a teacher</h3>
        <Button 
        variant='outlined'
        color='primary'
        size = "large"
        onClick={()=>history.push("/teacher-details")}>
        
         <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5xjDjeFaJVJG3m6436T144AtJjgD9tUaLdg&usqp=CAU' alt=""/>
        </Button></span>
    </Base>
  );
};

export default WelcomePage;
