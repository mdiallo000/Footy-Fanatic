import React from 'react';
import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from '@mui/material';
import { Delete, ClearAllIcon } from '@mui/icons-material';

function MakeTeam() {
  return (
    <div>
      <Paper>
        <List>
          {Mytodolist.map((item) => {
            return (
              <>
                <Todo data={item} DeleteTodo={DeleteTodo} />
                <Divider />
              </>
            );
          })}
        </List>
      </Paper>
    </div>
  );
}

export default MakeTeam;
