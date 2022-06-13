import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import TextField from '@mui/material/TextField';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';

import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

import './style.css';

export default function Home(props) {
  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    props.setSearchTerm(searchTerm);
  };

  return (
    <div className="main">
      <h1>Search Wars</h1>
      <div className="search">
        <TextField fullWidth label="Search" onChange={handleSearch} />
      </div>

      <List>
        {props.peopele.map(
          (person, i) =>
            person.name.toLowerCase().includes(props.searchTerm) && (
              <Link to="/details" state={{ person }}>
                <ListItem key={i}>
                  <ListItemButton>
                    <ListItemIcon>
                      <PersonOutlineIcon />
                    </ListItemIcon>
                    <ListItemText primary={person.name} />
                  </ListItemButton>
                </ListItem>
              </Link>
            )
        )}
      </List>
    </div>
  );
}
