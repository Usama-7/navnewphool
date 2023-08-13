import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import { toast } from 'react-toastify';


const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const postingData = async (e) => {
    e.preventDefault();
    let result = await fetch('https://newphoolbackend-e5f66bec9c2c.herokuapp.com/api/v1/auth/login', {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      }
    })
    result = await result.json();

    if (result.message == "Login Successful") {

      localStorage.setItem("user", JSON.stringify(result.user))
      localStorage.setItem("token", JSON.stringify(result.token))


      console.log(result)
      console.log(result.user.role)
      toast.success('Login Successfully')
      navigate("/")
    }
    else {
      Swal.fire({
        title: 'Error!',
        text: 'Incorrect Email or Password',
        icon: 'error',
        confirmButtonText: 'Enter Correct'
      })
    }

    

    if (!result) {
      navigate("/login")
    }
  }

  return (
    <>
      <div>
        <br />
        <br />
        <div className="container" style={{ marginTop: "5%", marginBottom: "10%" }}>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card-group mb-0">
                <div className="card p-4">
                  <div className="card-body">
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <div className="input-group mb-3">
                      <span className="input-group-addon "></span>
                      <input onChange={(e) => setEmail(e.target.value)} type="text" className="form-control" placeholder="Username" />
                    </div>
                    <div className="input-group mb-4">
                      <span className="input-group-addon "></span>
                      <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" placeholder="Password" />
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <button onClick={postingData} type="button" className="btn btn-primary px-4">Login</button>
                      </div>
                      <div className="col-6 text-right">
                        <Link to="/register" type="btn button" className="btn ">Register Now!</Link>
                      </div>
                    </div>
                  </div>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
}

export default Login;