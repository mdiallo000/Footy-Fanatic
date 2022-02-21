import React, { useState } from 'react';
import MakeTeam from './MakeTeam';
import { v4 as uuidv4 } from 'uuid';
import NewPlayer from './NewPlayer';
import { Typography, Paper, AppBar, Toolbar, Grid } from '@mui/material';
function MakeTeamContainer() {
  //  * This function will allow us to to capture multiple inputs and store the data in an object. This will result in clean code
  const [Allinputs, SetInputs] = useState({
    Fullname: '',
    position: '',
    available: '',
    cellPhone: '',
  });
  const GetAllInputs = (event) => {
    event.preventDefault();

    const eventTarget = event.target.getAttribute('name');
    const Value = event.target.value;

    const NewAllinputs = { ...Allinputs };
    NewAllinputs[eventTarget] = Value;
    SetInputs(NewAllinputs);
  };
  // ** The function above capttures the data frm my inputs

  const [Info, Setinfo] = useState([]);

  // * So i need a function which takes in all the inputs and spits and it to my Infos

  const CreateNewMenber = (event) => {
    event.preventDefault();
    const newPlayer = [
      ...Info,
      {
        id: uuidv4(),
        Fullname: Allinputs.Fullname,
        position: Allinputs.position,
        available: Allinputs.available,
        cellPhone: Allinputs.cellPhone,
      },
    ];
    Setinfo(newPlayer);
  };
  // ** Function to delete a player
  const deletePlayer = (uuID) => {
    const deletedPlayer = Info.filter((player) => player.id !== uuID);
    Setinfo(deletedPlayer);
  };
  return (
    <Paper>
      {/* <MakeTeam /> */}
      <AppBar colors="primary" position="static" style={{ height: '64px' }}>
        <Toolbar>
          <Typography color="inherit">Team Tracker </Typography>
        </Toolbar>
      </AppBar>
      <Grid container justifyContent="center" style={{ marginTop: '1rem' }}>
        <Grid item xs={11} md={8} lg={4}>
          <form action="">
            <input
              type="text"
              name="Fullname"
              required="required"
              onChange={GetAllInputs}
              placeholder="name...smith"
            />
            <input
              type="text"
              name="position"
              required="required"
              onChange={GetAllInputs}
              placeholder="position..."
            />
            <input
              type="text"
              name="available"
              required="required"
              onChange={GetAllInputs}
              placeholder="availability"
            />
            <input
              type="tel"
              name="cellPhone"
              required="required"
              onChange={GetAllInputs}
              placeholder="cell 999-888.."
            />
            {/* <button>Add To Team</button> */}
            <input type="submit" onClick={CreateNewMenber} />
          </form>
          <MakeTeam player={Info} deletePlayer={deletePlayer} />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default MakeTeamContainer;
