import React from 'react';
import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
function NewPlayer({ player }) {
  return (
    <div>
      <ListItem>
        <>
          <Checkbox tabIndex={-1} />
          <ListItemText>{player.Fullname}</ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label="Delete">
              <Delete />
            </IconButton>
            {/* sfdsdsssssssssss */}

            <IconButton aria-label="Edit">
              <Edit />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      </ListItem>
    </div>
  );
}

export default NewPlayer;
