import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TeamMembers from './components/TeamMembers';
import TeamMembersForm from './components/TeamMembersForm';

const blankFormData = {
  name: ''.
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
    const newTeamMember = {
      name: formData.name(),
      position: formData.position(),
      email: formData.email(),
      campus: formData.campus()
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
