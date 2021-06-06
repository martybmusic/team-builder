import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TeamMembers from './components/TeamMembers';
import TeamMembersForm from './components/TeamMembersForm';

const blankFormData = {
  name: '',
  position: '',
  email: '',
  campus: '',
}

function App() {
  const [ teamMembers, setTeamMembers ] = useState([])
  const [ formData, setFormData ] = useState(blankFormData)

  const updateForm = (inputName, inputValue) => {
    setFormData({ ...formData, [inputName]: inputValue})
  }

  const buildForm = () => {
    const newMember = {
      name: formData.name(),
      position: formData.position(),
      email: formData.email(),
      campus: formData.campus()
    }
    if (!newMember.name || !newMember.position || !newMember.email || !newMember.campus) return
    setTeamMembers([newMember, ...teamMembers])
    setFormData(blankFormData)

  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Our Team</h1>
      </header>
      <TeamMembersForm
        update={updateForm}
        build={buildForm}
        data={formData}
      />
      {
      teamMembers.map(member => {
        return (<TeamMembers key={member.id} details={member} />)
        })}
    </div>
  );
}

export default App;
