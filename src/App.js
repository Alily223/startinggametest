import React , {useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import "./Styles/main.scss";

import Navigation from './Pages/NavigationFeatures/Navigation.jsx';
import Home from './Pages/HomeFeatures/Home.jsx';
import Water from './Pages/WaterFeatures/Water.jsx';
import WaterManagers from './Pages/WaterFeatures/WaterManagers.jsx';
import WaterUpgrades from './Pages/WaterFeatures/WaterUpgrades.jsx';
import Lemonade from './Pages/LemonadeFeatures/Lemonade.jsx';
import LemoandeManagers from './Pages/LemonadeFeatures/LemoandeManagers.jsx';
import LemonadeUpgrades from './Pages/LemonadeFeatures/LemonadeUpgrades.jsx';
import SpecialDrinks from './Pages/SpecialDrinksFeatures/SpecialDrinks.jsx';
import SpecialDrinksManagers from './Pages/SpecialDrinksFeatures/SpecialDrinksManagers.jsx';
import SpecialDrinksUpgrades from './Pages/SpecialDrinksFeatures/SpecialDrinksUpgrades.jsx';
import Settings from './Pages/Settings/Settings.jsx';

function App() {

  let [money, setMoney] = useState(0)

  let [waterWellAmount, setWaterWellAmount] = useState(0)
  let [waterWellMaxAmount, setWaterWellMaxAmount] = useState(10)
  let [waterWellCost, setWaterWellCost] = useState(0)
  let [waterAmount, setWaterAmount] = useState(0)
  let [waterMaxAmount, setWaterMaxAmount] = useState(100)
  let [waterWellSpeed, setWaterWellSpeed] = useState(10)
  let [waterPrice, setWaterPrice] = useState(0.50)

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation money={money} setMoney={setMoney}/>
        <Routes>
          <Route exact path='/' element={<Home money={money} setMoney={setMoney} waterWellAmount={waterWellAmount} setWaterWellAmount={setWaterWellAmount} waterWellMaxAmount={waterWellMaxAmount} setWaterWellMaxAmount={setWaterWellMaxAmount} waterWellCost={waterWellCost} setWaterWellCost={setWaterWellCost} waterAmount={waterAmount} setWaterAmount={setWaterAmount} waterWellSpeed={waterWellSpeed} setWaterWellSpeed={setWaterWellSpeed} waterMaxAmount={waterMaxAmount} setWaterMaxAmount={setWaterMaxAmount}/>}/>
          <Route path='/water' element ={<Water money={money} setMoney={setMoney} waterWellAmount={waterWellAmount} setWaterWellAmount={setWaterWellAmount} waterWellMaxAmount={waterWellMaxAmount} setWaterWellMaxAmount={setWaterWellMaxAmount} waterWellCost={waterWellCost} setWaterWellCost={setWaterWellCost} waterAmount={waterAmount} setWaterAmount={setWaterAmount} waterWellSpeed={waterWellSpeed} setWaterWellSpeed={setWaterWellSpeed} waterMaxAmount={waterMaxAmount} setWaterMaxAmount={setWaterMaxAmount} waterPrice={waterPrice} setWaterPrice={setWaterPrice}/>}/>
          <Route path='/watermanagers' element ={<WaterManagers/>}/>
          <Route path='/waterupgrades' element ={<WaterUpgrades/>}/>
          <Route path='/lemonade' element ={<Lemonade/>}/>
          <Route path='/lemonademanagers' element ={<LemoandeManagers/>}/>
          <Route path='/lemonadeupgrades' element ={<LemonadeUpgrades/>}/>
          <Route path='/specialdrinks' element ={<SpecialDrinks/>}/>
          <Route path='/specialdrinksmanagers' element ={<SpecialDrinksManagers/>}/>
          <Route path='/specialdrinksupgrades' element ={<SpecialDrinksUpgrades/>}/>
          <Route path='/settings' element ={<Settings/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
