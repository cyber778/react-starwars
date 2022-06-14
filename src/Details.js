import React from 'react';
import { useLocation } from 'react-router-dom';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

function Details() {
  const location = useLocation();
  const person = location.state.person;
  let entries = Object.entries(person);

  return (
    <div>
      <h1>Hi {person.name}:</h1>
      <List>
        {entries.map(([label, val] = entry, i) => (
          <ListItem key={i}>
            <ListItemAvatar>
              <Avatar>
                <ArrowCircleRightOutlinedIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={label} secondary={val} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default Details;
