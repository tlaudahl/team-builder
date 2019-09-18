import React, { useState } from 'react';
import './App.css';
import TeamMember from './components/TeamMember';
import Form from './components/Form';

function App() {
  const [teamMember, setTeamMember] = useState([{
    id: 1,
    name: 'Example',
    email: 'Example',
    role: 'Example',
  }])
  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role,
    };
    setTeamMember([...teamMember, newMember]);
  };
  return (
    <div className="App">
      <Form addNewMember={addNewMember} />
      <div className='teamMemberContainer'>
        <TeamMember teamMember={teamMember} />
      </div>
    </div>
  );
}

export default App;
