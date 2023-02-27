import { useEffect, useState } from "react";
import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import AuthPage from "./Components/AuthPage";
import DashBoard from "./Components/DashBoard";
import NoPage from "./Components/NoPage";
import StudentProfile from "./Components/StudentProfile";
import { StudentDetails } from "./Components/Students";
import WelcomePage from "./Components/WelcomePage";
import AddStudents from "./Components/AddStudents";
import EditStudents from "./Components/EditStudents";
import TeacherDetails from "./Components/teacherDetails";
import AddTeachers from "./Components/addTeachers";
import EditTeachers from "./Components/EditTeachers";
import TeacherProfile from "./Components/TeacherProfile";
function App() {
  const [studentsData, setStudents] = useState([]);
  const [teachersData, setTeachersData] = useState([]);

  useEffect(() => {
    const getStudents = async () => {
      try {
        const response = await fetch(
          "http://localhost:9000/students/",
          {
            method: "GET",
          }
        );
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        console.log(error);
      }
    };
    const getTeachersData = async()=>{
      try{
        const teachersDataResponse = await fetch("https://63ae590dceaabafcf177e630.mockapi.io/teachersData",
        {
          method:"GET",
        });
        const dataOfTeachers = await teachersDataResponse.json();
        setTeachersData(dataOfTeachers);
      }
      catch(error){
          console.log(error)
      }
    }
    getStudents();
    getTeachersData();
  }, []);
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <WelcomePage />
        </Route>

        <Route path="/dashboard">
          <DashBoard />
        </Route>

        <Route path="/register">
          <AuthPage />
        </Route>

        <Route path="/details">
          <StudentDetails
            studentsData={studentsData}
            setStudents={setStudents}
          />
        </Route>

        <Route path="/students">
          <Redirect to="/details" />
        </Route>

        <Route path="/student/:id">
          <StudentProfile studentsData={studentsData} />
        </Route>

        <Route path="/add-data">
          <AddStudents studentsData={studentsData} setStudents={setStudents} />
        </Route>

        <Route path="/add-teacher">
          <AddTeachers
            teachersData={teachersData}
            setTeachersData={setTeachersData}
          />
        </Route>

        <Route path="/edit/:id">
          <EditStudents studentsData={studentsData} setStudents={setStudents} />
        </Route>

        <Route path="/edit-teacher/:id">
          <EditTeachers
            teachersData={teachersData}
            setTeachersData={setTeachersData}
          />
        </Route>

        <Route path="/teacher-details">
          <TeacherDetails
            teachersData={teachersData}
            setTeachersData={setTeachersData}
          />
        </Route>

        <Route path="/teachersProfile/:id">
            <TeacherProfile
            teachersData={teachersData}
            />
        </Route>

        <Route path="**">
          <NoPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
