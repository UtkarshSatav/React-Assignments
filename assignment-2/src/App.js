import React from 'react';
import './App.css';
import UserCard from './UserCard';

function App() {
  return (
    <div className="App">
      <h1>User Card Assignment</h1>
      <UserCard name="Alice" age={25} />
      <UserCard name="Bob" age={30} />
      <UserCard /> {/* Testing default props */}
    </div>
  );
}

export default App;
