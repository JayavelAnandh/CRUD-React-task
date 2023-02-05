import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Base from "../Base/Base";

const AddTeachers = ({ teachersData, setTeachersData }) => {
  const history = useHistory(null);
  const [name, setName] = useState("");
  const [secondaryJob, setSecondaryJob] = useState("");
  const [primaryJob, setPrimaryJob] = useState("");
  const [company, setCompany] = useState("");
  const [experience, setExperience] = useState("");

  const addTeacherData = async () => {
    try {
      const newTeacherData = {
        name,
        secondaryJob,
        company,
        primaryJob,
        experience,
      };

      const response = await fetch("https://63ae590dceaabafcf177e630.mockapi.io/teachersData",
      {
        method:"POST",
        body:JSON.stringify(newTeacherData),
        headers:
        {
          "Content-Type":"application/json"
        }
      });
          const lastAddedData = await response.json()
      
      setTeachersData([].concat([...teachersData,lastAddedData]));
      history.push("/teacher-details");
      setName("");
      setSecondaryJob("");
      setCompany("");
      setPrimaryJob("");
      setExperience("");
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Base
      title="Add a Teacher here"
      description="Fill the form below to add a data of your own"
    >
      <div className="input-section">
        <TextField
          fullWidth
          label="Enter your name"
          onChange={(event) => setName(event.target.value)}
          value={name}
          id="fullWidth"
        />
        <TextField
          fullWidth
          label="Secondary-Job ?"
          onChange={(event) => setSecondaryJob(event.target.value)}
          value={secondaryJob}
          id="fullWidth"
        />
        <TextField
          fullWidth
          label="Company you work ?"
          onChange={(event) => setCompany(event.target.value)}
          value={company}
          id="fullWidth"
        />
        <TextField
          fullWidth
          label="Job- Role in that Company ?"
          onChange={(event) => setPrimaryJob(event.target.value)}
          value={primaryJob}
          id="fullWidth"
        />
        <TextField
          fullWidth
          label="Enter Your Experience(in years)"
          onChange={(event) => setExperience(event.target.value)}
          value={experience}
          id="fullWidth"
        />
        <Button
          className="add-btn"
          color="success"
          variant="contained"
          onClick={addTeacherData}
        >
          Add Teacher Data
        </Button>
      </div>
    </Base>
  );
};
export default AddTeachers;
