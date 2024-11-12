import React from 'react';
//import Login from './components/Login';
//import DigitalClock from './components/DigitalClock';
//import Statein from './components/Statein';
//import Mod from './components/Mod';
//import StopWatch from './components/StopWatch';
//import Login from './components/Sign';
import Sign from './components/Sign';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Landing from './components/Landing';
//import DigitalClock from './components/DigitalClock';
//import Mod from './components/Mod';
//import Ref from './components/Ref';
//import State from './components/State';
//import Login from './components/Login';

//import Tic from './components/Tic';
//import ColorPicker from './components/ColorPicker';
//import Update from './components/Update';
//import Obj from './components/Obj';
//import State from './components/State';
//import Statein from './components/Statein';
//import DigitalClock from './components/DigitalClock';
//import ColorPicker from './components/ColorPicker';
//import Update from './components/Update';
//import Tic from './components/Tic';
//import Statein from './components/Statein';

const App =() =>{
  
  return <div> 
<Router>
  <Routes>
    <Route path="/login" element={<Login/>}/>
    <Route path="/" element={<Sign/>}></Route>
    <Route path="/landing"element={<Landing/>}></Route>
  </Routes>
</Router>
  </div>
}

export default App;

