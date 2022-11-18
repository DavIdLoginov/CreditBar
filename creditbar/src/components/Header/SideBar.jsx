import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import './styles.css'
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import BankIcon from '@mui/icons-material/AccountBalance';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

export default function SideBar() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const sidebar = [
    {
      //['Главная', 'Банки', 'Заявки']
        name: "Главная",
        path: "/main",
        icon: <HomeIcon fontSize="large" />
    }, {
        name: "Банки",
        path: "/banks",
        icon: <BankIcon fontSize="large" />
    }, {
        name: "Заявки",
        path: "/applications",
        icon: <AssignmentIcon fontSize="large" />
    },
]

  const list = (anchor) => (
    <Box
      sx={{ width:  200 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className='burger__li'>
        {sidebar.map((text, index) => (
          <Link to={text.path} >
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <>{text.icon}</>
              </ListItemIcon>
                <ListItemText primary={text.name} />
            </ListItemButton>
          </ListItem>
      <Divider />

          </Link> 
        ))}
      </List>
      <List className='burger__li'>
        {['Профиль'].map((text, index) => (
          <Link to="/profil">
          <ListItem  key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AccountBoxIcon fontSize="large" />
              </ListItemIcon>
              <ListItemText  primary={text} />
            </ListItemButton>
          </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <div >
      {['left'].map((anchor) => (
        <React.Fragment  key={anchor}>
          <MenuIcon onClick={toggleDrawer(anchor, true)}>{anchor}</MenuIcon>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
