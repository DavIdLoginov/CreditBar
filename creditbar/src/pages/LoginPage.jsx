import React, { useEffect } from "react";
import { login} from '../store/slices/authSlice';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import axios from "axios";


const LoginPage = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [inputValues, setInputValues] = useState({
    email: '',
    password: ''
  })

  const loginUser = (e, userInfo) => {
    e.preventDefault()
    dispatch(login(userInfo))
    const ok = JSON.parse(localStorage.getItem('tokenAuth'))
    if(ok){
      console.log(ok);
      axios.get(`http://lala34.pythonanywhere.com/profile`, {
        headers: {
          Authorization: `Bearer ${ok.auth_token}`
        }
      })
      navigate('/profil');
    }
  }

  return (
    <div>
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3  className="Auth-form-title">Login</h3>
            <div className="form-group mt-3">
              <label style={{ fontSize: "20px" }}>User Email</label>
              <input
                value={inputValues.email} onChange={(e) => setInputValues({...inputValues, email: e.target.value})}
                type="text"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label style={{ fontSize: "20px" }}>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                value={inputValues.password} onChange={(e) => setInputValues({...inputValues, password: e.target.value})}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              {
                inputValues.email == '' || inputValues.password == ''? 

              <button type="submit" className="btn btn-primary noactiv__btn">
                Submit
              </button>

                :
              <div key='dada' onClick={(e) => loginUser(e, inputValues)} type="submit" className="btn btn-primary">
                  Submit
              </div>
              }
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;