import React from 'react'
import { Switch, Route } from 'react-router-dom' 
import HomePage from './pages/HomePage'
import Order from './pages/Order'
import Pay from './pages/Pay'
import Price from './pages/Price'

const MainContent = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/Главная" component={HomePage}></Route>
        <Route exact path="/Заказ" component={Order}></Route>
        <Route exact path="/Оплата" component={Pay}></Route>
        <Route exact path="/Цена" component={Price}></Route>
      </Switch>
    </main>
  )
}

export default MainContent
