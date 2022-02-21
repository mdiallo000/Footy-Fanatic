import React from 'react';
import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from '@mui/material';
import { Divider, Paper, List } from '@mui/material';
import NewPlayer from './NewPlayer';

function MakeTeam({ player }) {
  return (
    <div>
      <Paper>
        <List>
          {player.map((item) => {
            return (
              <>
                <NewPlayer data={item} />
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
