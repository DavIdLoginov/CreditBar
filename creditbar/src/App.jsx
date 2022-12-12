import React, {useEffect} from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header/Header';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import ApplicationsPage from './pages/ApplicationsPage';
import ProfilPage from './pages/ProfilPage';
import { useState } from 'react';


function App() {

  const [userLogged, setUserLogged ] = useState('')

  useEffect(() => {
    setUserLogged(localStorage.getItem("tokenAuth"))
  }, [userLogged]);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/login' element={<RegisterPage />} /> 
          <Route path='/profil' element={<ProfilPage />}/>
          <Route path='/signin' element={<LoginPage />}/> 
          <Route path='/' element={<MainPage />}/>
          <Route path='/banks' element={<h1>banks</h1>}/> 
          <Route path='/applications' element={<ApplicationsPage />}/>  
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
