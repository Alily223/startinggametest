import React , {useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import "./Styles/main.scss";

import Navigation from './Pages/NavigationFeatures/Navigation.jsx';
import Home from './Pages/HomeFeatures/Home.jsx';
import Settings from './Pages/Settings/Settings.jsx';

function App() {

  let [money, setMoney] = useState(0)
  let [energy, setEnergy] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation money={money} setMoney={setMoney} energy={energy} setEnergy={setEnergy}/>
        <Routes>
          <Route exact path='/' element={<Home money={money} setMoney={setMoney} energy={energy} setEnergy={setEnergy}/>}/>
          <Route path='/settings' element ={<Settings/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
