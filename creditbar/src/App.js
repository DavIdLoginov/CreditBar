import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/login' element={<h1>Login</h1>}/> 
          <Route path='/signin' element={<h1>sign in</h1>}/> 
          <Route path='/main' element={<h1>Main</h1>}/>
          <Route path='/banks' element={<h1>banks</h1>}/> 
          <Route path='/applications' element={<h1>applications</h1>}/> 
          <Route path='/profil' element={<h1>rofil</h1>}/> 
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
