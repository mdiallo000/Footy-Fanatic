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
  // ** The function above capttures the data frm my inputs
  const dummyObject = [
    {
      Fullname: 'Mamadou',
      position: 'Central Mid',
      available: 'Yes',
      number: 929 - 898 - 4867,
    },
  ];
  const [Info, Setinfo] = useState(dummyObject);
  console.log(dummyObject);

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

      <div className="container" style={{ marginTop: '5rem' }}>
        {Info.map((obj) => {
          return <h1>{obj.Fullname}</h1>;
        })}
      </div>
    </div>
  );
}

export default MakeTeamContainer;
