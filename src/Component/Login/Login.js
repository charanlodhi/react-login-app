import React, { useState } from "react";
import Dashboard from "../Dashboard/Dashboard";
import { useNavigate } from "react-router-dom";
function Login({setAuthenticated}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErrors, setEmailerrors] = useState();
  const [passErrors, setPassErrors] = useState();
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
const handleEmailchange = (e) =>{
    setEmail(e.target.value);
    if(email.length > 0){
        setEmailerrors(false);
    }
    if(password.length > 0){
        setPassErrors(false);
    }
}

const showPassword = () => {
   setShowPass(!showPass)
}
  const handleSubmit = (e) => {
        e.preventDefault();
        if(email === "charan@gmail.com" && password === "12345"){
            console.log("login success")
            setAuthenticated(true)
            navigate("/dashboard")
        } else{
            console.log("login failure")
            setEmailerrors("Please enter email")
            setPassErrors("Please enter Password")
        }
  }
  return (
    <div className="container-fluid">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-lg-6 col-sm-12 p-0">
            <div className="left">
              <img src="assest/img/Logo.png" alt="" />
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 p-0">
            <div className="right">
              <div className="form">
                <h2>Log in to your account</h2>
                <div className="mb-3">
                  <label htmlFor="email">email</label>
                  <input
                  aria-labelledby ="email"
                    className="form-control"
                    type="email"
                    data-testid="input-email"
                    value={email}
                    onChange={handleEmailchange}
                    //onChange={(e) => setEmail(e.target.value)}

                  />
                 {email && !(/\S+@\S+\.\S+/).test(email) && <span className="error" data-testid="error-msg">Please enter a valid email.</span>}
                  {/* <div data-testid="error-msg"> {emailErrors && <p className="text-danger">{emailErrors}</p>}</div> */}
                </div>

                <div className="mb-3 position-relative">
                  <input
                    className="form-control"
                    data-testid="input-password"
                    type={showPass ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {passErrors && <p className="text-danger">{passErrors}</p>}
                  <div className="viewicon" data-testid="view-icon" onClick={showPassword}></div>
                </div>
                <div className="mb-3">
                  {" "}
                  <a href="#">
                    <span>Forgot Password?</span>
                  </a>
                </div>
                <div className="mb-3">
                  <button type="submit" data-testid="submit-button">LOGIN</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
export default Login;
