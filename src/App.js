import React , {useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import "./Styles/main.scss";

import Navigation from './Pages/NavigationFeatures/Navigation.jsx';
import Home from './Pages/HomeFeatures/Home.jsx';
import Factory from './Pages/FactoryFeatures/Factory.jsx';
import Managers from './Pages/ManagersFeatures/Managers.jsx';
import Storage from './Pages/StorageFeatures/Storage.jsx';
import Storefront from './Pages/StorefrontFeatures/Storefront.jsx';

function App() {
  const [money, setMoney] = useState(0)
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation money={money} setMoney={setMoney}/>
        <Routes>
          <Route exact path='/' element={<Home money={money} setMoney={setMoney}/>}/>
          <Route path="/factory" element={<Factory money={money} setMoney={setMoney}/>}/>
          <Route path="/storage" element={<Storage money={money} setMoney={setMoney}/>}/>
          <Route path="/storefront" element={<Managers money={money} setMoney={setMoney}/>}/>
          <Route path="/managers" element={<Storefront money={money} setMoney={setMoney}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
