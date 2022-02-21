import React, { useState } from 'react';
import MakeTeam from './MakeTeam';
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

  return (
    <div>
      {/* <MakeTeam /> */}
      <form action="">
        <input
          type="text"
          name="Fullname"
          required="required"
          onChange={GetAllInputs}
        />
        <input
          type="text"
          name="position"
          required="required"
          onChange={GetAllInputs}
        />
        <input
          type="text"
          name="available"
          required="required"
          onChange={GetAllInputs}
        />
        <input
          type="tel"
          name="cellPhone"
          required="required"
          onChange={GetAllInputs}
        />
        {/* <button>Add To Team</button> */}
        <input type="submit" />
      </form>
    </div>
  );
}

export default MakeTeamContainer;
