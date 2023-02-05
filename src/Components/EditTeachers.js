import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Base from "../Base/Base";

const EditTeachers = ({ teachersData, setTeachersData }) => {
  const history = useHistory();
  const { id } = useParams();
  const teacherObject = teachersData[id];
  const [editId, setEditId] = useState("");
  const [name, setName] = useState("");
  const [secondaryJob, setSecondaryJob] = useState("");
  const [company, setCompany] = useState("");
  const [primaryJob, setPrimaryJob] = useState("");
  const [experience, setExperience] = useState("");

  useEffect(() => {
    setEditId(teacherObject.id);
    setName(teacherObject.name);
    setSecondaryJob(teacherObject.secondaryJob);
    setCompany(teacherObject.company);
    setPrimaryJob(teacherObject.primaryJob);
    setExperience(teacherObject.experience);
  },[]);

  const updateTeachersData = async () => {
    try {
      const newTeacherData = {
        name,
        secondaryJob,
        company,
        primaryJob,
        experience,
      };
      const response = await fetch(
        `https://63ae590dceaabafcf177e630.mockapi.io/teachersData/${editId}`,
        {
          method: "PUT",
          body: JSON.stringify(newTeacherData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      console.log(data);
      if (data) {
        const editTeacherIndex = teachersData.findIndex(
          (stud) => stud.id === editId
        );
        teachersData[editTeacherIndex] = newTeacherData;
        setTeachersData([].concat([...teachersData]));
        setName("");
        setSecondaryJob("");
        setCompany("");
        setPrimaryJob("");
        setExperience("");
        history.push("/teacher-details");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Base title="Edit the selected Teacher's Data">
      <div className="input-section">
        <TextField
          fullWidth
          label="Enter the Name"
          onChange={(event) => setName(event.target.value)}
          value={name}
          id="fullWidth"
        />
        <TextField
          fullWidth
          label="Secondary Job?"
          onChange={(event) => setSecondaryJob(event.target.value)}
          value={secondaryJob}
          id="fullWidth"
        />
        <TextField
          fullWidth
          label="Enter your current working company"
          onChange={(event) => setCompany(event.target.value)}
          value={company}
          id="fullWidth"
        />
        <TextField
          fullWidth
          label="Enter your primary job"
          onChange={(event) => setPrimaryJob(event.target.value)}
          value={primaryJob}
          id="fullWidth"
        />
        <TextField
          fullWidth
          label="Enter the Experience"
          onChange={(event) => setExperience(event.target.value)}
          value={experience}
          id="fullWidth"
        />
        <Button
          className="add-btn"
          color="secondary"
          variant="contained"
          onClick={updateTeachersData}
        >
          Update Data
        </Button>
      </div>
    </Base>
  );
};
export default EditTeachers;
