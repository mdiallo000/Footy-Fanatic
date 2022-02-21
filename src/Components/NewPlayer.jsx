import React from 'react';
import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from '@mui/material';
import { Delete } from '@mui/icons-material';
function NewPlayer({ data, deletePlayer }) {
  console.log(data.id);
  return (
    <div>
      <ListItem>
        <>
          <Checkbox tabIndex={-1} />
          <ListItemText>{data.Fullname}</ListItemText>
          <ListItemText>{data.position}</ListItemText>
          <ListItemText>{data.available}</ListItemText>
          <ListItemText>{data.cellPhone}</ListItemText>
          <ListItemSecondaryAction>
            <IconButton
              aria-label="Delete"
              onClick={() => {
                deletePlayer(data.id);
              }}
            >
              <Delete />
            </IconButton>
            {/* sfdsdsssssssssss */}

            {/* <IconButton aria-label="Edit">
              <Edit />
            </IconButton> */}
          </ListItemSecondaryAction>
        </>
      </ListItem>
    </div>
  );
}

export default NewPlayer;
