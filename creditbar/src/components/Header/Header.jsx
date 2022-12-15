import React, {useState, useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SideBar from './SideBar';
import './styles.css';
import { Link } from 'react-router-dom';
// import { storageValue } from '../../store/store'
// import { useState } from 'react';


export default function Header() {

  const [token, setToken] = useState()
  

  const tokenFun = () => {
    setToken(localStorage.getItem('tokenAuth'))
  }

  useEffect(()=> {
    tokenFun()
  }, [token])


  // setstateStoreg(localStorage.getItem('tokenAuth'))

  
  return (
    <>
        <Box  className="header" sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar  className="header__cnt" >
          { token?
            <SideBar />
            : <></>
            }
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link className='link' to='/'>
                CreditBar
              </Link>
            </Typography>
            {
              token ?
              <Link to='/profil'> 
                <div className='user__prof'></div>
              </Link>
              :
              <>
              <Link to="login" className='link'>
              <Button color="inherit">Register</Button>
            </Link>
            <Link to="signin" className='link'>
              <Button   color="inherit">Login</Button>
            </Link>
            </>
            }
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

