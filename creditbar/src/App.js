import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header/Header';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/login' element={<RegisterPage />} /> 
          <Route path='/signin' element={<LoginPage />}/> 
          <Route path='/' element={<MainPage />}/>
          <Route path='/banks' element={<h1>banks</h1>}/> 
          <Route path='/applications' element={<h1>applications</h1>}/> 
          <Route path='/profil' element={<h1>rofil</h1>}/> 
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
