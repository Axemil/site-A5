import React from 'react'
import { Switch, Route } from 'react-router-dom' 
import HomePage from './pages/HomePage'
import Order from './pages/Order'
import Pay from './pages/Pay'
import Price from './pages/Price'
import Eng1 from './pages/engeneer/Eng1'
import Eng2 from './pages/engeneer/Eng2'
import Eng3 from './pages/engeneer/Eng3'
import Eng4 from './pages/engeneer/Eng4'
import Eng5 from './pages/engeneer/Eng5'
import Eng6 from './pages/engeneer/Eng6'
import Eng7 from './pages/engeneer/Eng7'
import Eng8 from './pages/engeneer/Eng8'

const MainContent = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/Главная" component={HomePage}></Route>
        <Route exact path="/Заказ" component={Order}></Route>
        <Route exact path="/Оплата" component={Pay}></Route>
        <Route exact path="/Цена" component={Price}></Route>
        <Route exact path="/Eng1" component={Eng1}></Route>
        <Route exact path="/Eng2" component={Eng2}></Route>
        <Route exact path="/Eng3" component={Eng3}></Route>
        <Route exact path="/Eng4" component={Eng4}></Route>
        <Route exact path="/Eng5" component={Eng5}></Route>
        <Route exact path="/Eng6" component={Eng6}></Route>
        <Route exact path="/Eng7" component={Eng7}></Route>
        <Route exact path="/Eng8" component={Eng8}></Route>
      </Switch>
    </main>
  )
}

export default MainContent
