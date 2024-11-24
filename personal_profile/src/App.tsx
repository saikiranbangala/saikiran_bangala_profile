import React from 'react';
import Layout from './Layout';
import './App.css';
import Routes from './Routes/routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  document.title = "SAI-PORTFOLIO"
  return (
    <div className="App">
      <Layout/>
      <Routes/>
      
    </div>
  );
}

export default App;
