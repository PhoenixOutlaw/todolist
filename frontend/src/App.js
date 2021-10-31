import React from 'react';
import './App.css';
import { Main } from './components/Main';
import { Header } from './components/Header';
import { Login } from './components/Login';

function App() {
  return (
    <div className="App">
      <Login/>
      {/* <Header/>
      <Main/> */}
    </div>
  );
}

export default App;
