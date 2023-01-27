import { Button } from '@mui/material'
import React from 'react'
import Base from '../Base/Base'

const DashBoard = () => {
  return (
    <Base
    title = "Welcome To Students App"
    description= "Please Click the Below button to navigate to home page"
    >
        <Button 
        variant='outlined'
        color='primary'
        size = "large">
        Student Page
        </Button>
     </Base>
  )
}

export default DashBoard;