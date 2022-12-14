import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from 'react';
import { register} from '../store/slices/authSlice';
import { useDispatch } from 'react-redux';

const RegisterPage = () => {
  const dispatch = useDispatch()
  const [inputValues, setInputValues] = useState({
    username: '',
    email: '',
    password: ''
  })


  const registerUser = (e ,userInfo) => {
    e.preventDefault()
    dispatch(register(userInfo))
  }
  
  return (
    <div>
      <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Register</h3>
          <div className="form-group mt-3">
            <label style={{fontSize: "20px"}}>User Name</label>
            <input
              value={inputValues.username} onChange={(e) => setInputValues({...inputValues, username: e.target.value})}
              type="text"
              className="form-control mt-1"
              placeholder="User Name"
              required
            />
          </div>
          <div className="form-group mt-3">
            <label style={{fontSize: "20px"}}>Email address</label>
            <input
              value={inputValues.email} onChange={(e) => setInputValues({...inputValues, email: e.target.value})}
              type="email"
              className="form-control mt-1"
              placeholder="User email"
              required
            />
          </div>
          <div className="form-group mt-3">
            <label style={{fontSize: "20px"}}>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="User password"
              value={inputValues.password} onChange={(e) => setInputValues({...inputValues, password: e.target.value})}
              required
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button onClick={(e) => registerUser(e, inputValues)} type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
    </div>
  );
};

export default RegisterPage;