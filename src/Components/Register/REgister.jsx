
import React, { useState } from 'react';
import './register.scss';
import logo from '../../Components/Header/Img/Logo.svg';
import axios from '../../Api/Index';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
const Register = () => {

  const [username, setUsername] = useState("yraigatt3")
  const [password, setPassword] = useState("sRQxjPfdS")

  let navigate = useNavigate()

  const handleLogin = (event)=>{
    event.preventDefault()
  
    let user = {
      username,
      password
    }
    axios
      .post( "/auth/login", user )
      .then(res => {
        console.log("res>>>", res.data.token)
        toast.success("welcome")
        localStorage.setItem("x-auth-token", res.data.token)
        navigate("/admin")
      })
      .catch(err => {
        console.log("err>>>" , err)
        toast.error("username or password is incorrect")
      })

  }

  return (

    <>
      <div className="line Container"><p>Login</p></div>

      <div className="sign-up Container">
        <img src={logo} alt="" />
        <div className="input">
          <form onSubmit={handleLogin}>
            <label htmlFor="email">Email Address*</label> <br />
            <input type='text' id='email' value={username} onChange={e => setUsername(e.target.value)} />
            <br /> <br />

            <label htmlFor="password">Password*</label> <br />
            <input type='password' id='password' value={password} onChange={e => setPassword(e.target.value)} />
            <br />
            
            <button type="submit">Login</button> <br />
            <button type="button" onClick={() => navigate(-1)}>Back</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
