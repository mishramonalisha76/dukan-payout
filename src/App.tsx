import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Content, Sidebar } from './components';

function App() {
  return (
    <div className=' h-screen flex'>
      <Sidebar/>
      <Content/>
    </div>
  );
}

export default App;
