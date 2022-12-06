import React, {useEffect, useState} from "react";
import "../App.css"
import { useNavigate } from "react-router-dom";

const Dashboard = () => {

const [logout, setLogout] = useState(false);
const navigate = useNavigate();

  useEffect(() => {
    if(!localStorage.getItem("auth")){
        navigate("/login");
    }   
  }, [logout]);

const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("auth");
    setLogout(true);
}

const gotoTask = () => {
    navigate("/tasks");
}

  return (
    <>
    <div className="App">
      Dashboard
      <hr/>
      <div>
        <button className="btn btn-primary" onClick={() => gotoTask()}>Tasks</button>
      </div>
      <br></br>
      <div>
        <button onClick={logoutHandler} className="btn btn-primary">Logout</button>
      </div>
      </div>
    </>
  );
};

export default Dashboard;
