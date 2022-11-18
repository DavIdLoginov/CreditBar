import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SideBar from './SideBar';
import './styles.css';
import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar  className="header" >
          <SideBar />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to='/main'>
              CreditBar
            </Link>
          </Typography>
          <Link to="login">
            <Button color="inherit"> login</Button>
          </Link>
          <Link to="signin">
            <Button   color="inherit">  Sign in</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

