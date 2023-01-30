import React from "react";
import Base from "../Base/Base";
import { useHistory } from 'react-router-dom'
import { Button } from '@mui/material'
const WelcomePage = () => {
  const history = useHistory();
  return (
    <Base
      title="Welcome to our Students🎓 Statistics App"
      description="This was build to Store Students Data"
    >
      <Button color="inherit" onClick={() => history.push("/register")}>
        <span className="icon">🏚</span>
        <span className="nav-name">Login</span>
      </Button>
    </Base>
  );
};

export default WelcomePage;
