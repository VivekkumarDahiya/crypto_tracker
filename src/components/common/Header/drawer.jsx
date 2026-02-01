import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useState } from 'react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import IconButton from '@mui/material/IconButton';
import style from "./drawer.module.css"


export default function SwipeableTemporaryDrawer() {
const [open,setOpen]=useState(false)

 return (
    <div>
     
          <IconButton onClick={()=>setOpen(true)}>
            <MenuRoundedIcon  className={style.drawer_link} />
            </IconButton  >
          <SwipeableDrawer anchor={"right"} open={open} onClose={()=>setOpen(false)} >
            <div  className={style.drawer_div}>
              <a href="#" className={style.drawer_link}>
              <p className={style.drawer_link}>Home</p></a>

              <a href="#" className={style.drawer_link}>
              <p className={style.drawer_link}>Watchlist</p></a>

              <a href="#" className={style.drawer_link}>
              <p className={style.drawer_link}>Compare</p>
              </a>

               <a href="#" className={style.drawer_link}>
               <p className={style.drawer_link}>Dashboard</p></a>

               
            </div>
          </SwipeableDrawer>
        
    </div>
  );
}
