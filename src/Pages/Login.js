import React, { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import {
  emailValidator,
  passwordValidator,
} from "../Components/regexValiditycheck";

const Login = () => {

  const navigate = useNavigate();
  const [logindetails, setDetails] = useState({ email: " ", password: " " });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const changeHandler = (e) => {
    setDetails({ ...logindetails, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if(localStorage.getItem("auth")) {
        navigate('/dashboard');
    }
  }, [])

  const submitHandler = (e) => {
    e.preventDefault();
    setSuccess('')
    if (!emailValidator(logindetails.email)) {
      return setError("Please enter a valid email id!");
    }

    if(!passwordValidator(logindetails.password)){
        return setError("The password should be atleast 4 characters with a combination of lowercase & uppercase letters, numbers and special characters ")
    }
    // console.log("validated")
    // setSuccess("Logged in!")
    if(logindetails.email !== "admin@admin.com" || logindetails.password !== "Qw1!"){
        return setError("Incorrect Login details!");
    }


    navigate('/dashboard');
    localStorage.setItem("auth", true);
    
  };

  return (
    <div>
      <div className="limiter">
        <div
          className="container-login100"
          style={{ backgroundImage: 'url("images/icons/bg_image_1.jpeg")' }}
        >
          <div className="wrap-login100 p-t-30 p-b-50">
            <span className="login100-form-title p-b-41">Login Form</span>

            {error.length > 0 && (
              <div style={{ marginBottom: "10px", color: "#d41872" }}>
                {error}
              </div>
            )}
            {success.length > 0 && (
              <div style={{ marginBottom: "10px", color: "#5F8D4E" }}>
                {success}
              </div>
            )}
            <form
              className="login100-form validate-form p-b-33 p-t-5"
              onSubmit={submitHandler}
            >
              <div
                className="wrap-input100 validate-input"
                data-validate="Enter username"
              >
                <input
                  className="input100"
                  type="text"
                  name="email"
                  placeholder="User name"
                  onChange={changeHandler}
                />
                <span className="focus-input100" data-placeholder="" />
              </div>
              <div
                className="wrap-input100 validate-input"
                data-validate="Enter password"
              >
                <input
                  className="input100"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={changeHandler}
                />
                <span className="focus-input100" data-placeholder="" />
              </div>
              <div className="container-login100-form-btn m-t-32">
                <button className="login100-form-btn">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div id="dropDownSelect1" />
    </div>
  );
};

export default Login;
