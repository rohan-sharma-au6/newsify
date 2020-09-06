import React from 'react';
import './App.css';
import {Switch,Route} from "react-router-dom"
import Navbar1 from "./components/Navbar"

import Headlines from './pages/Headlines';
import Business from "./pages/Business"
import Sports from "./pages/Sports"
import Technology from './pages/Technology';
import Health from './pages/Health';
import Entertainment from './pages/Entertainment';
import Science from './pages/Science';
import Channels from './pages/Channels'
import Bbc from './pages/Bbbc';
import Google from './pages/Google';
import Cnn from './pages/Cnn';
import Espn from './pages/Espn';
import Bitcoin from './pages/Bitcoin';
import Covid from "./pages/Covid"

function App() {
  return (
    <div className="App">
      <Navbar1/>
      <Switch>
        <Route exact path="/" component={Headlines}/>
        <Route exact path="/business" component={Business}/>
        <Route exact path="/sports" component={Sports}/>
        <Route exact path="/technology" component={Technology}/>
        <Route exact path="/health" component={Health}/>
        <Route exact path="/entertainment" component={Entertainment}/>
        <Route exact path ='/science' component={Science}/>
        <Route exact path ="/channels" component={Channels}/>
        <Route exact path ="/bbc" component={Bbc}/>
        <Route exact path ="/google" component={Google}/>
        <Route exact path ="/cnn" component={Cnn}/>
        <Route exact path ="/espn" component={Espn}/>
        <Route exact path="/bit" component={Bitcoin}/>
        <Route exact path ="/covid" component={Covid}/>
      </Switch>
      
    </div>
  );
}

export default App;
