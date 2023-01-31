import React from 'react'
import './App.css'
import AccInfo from './components/AccInfo/AccInfo'
import HelloUser from './components/HelloUser/HelloUser'
import Help from './components/Help/Help'
import Policy from './components/Policy/Policy'
import { Routes, Route } from 'react-router-dom'
import Orders from './components/Orders/Orders'
import Home from './components/Home'
import Arriving from './components/Arriving/Arriving'
import Delivered from './components/Delivered/Delivered'
import Cancelled from './components/Cancelled/Cancelled'
import Returned from './components/Returned/Returned'
import All from './components/All/All'
import OrderStatus from './components/OrderStatus/OrderStatus'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/all' element={<All />} />
        <Route path='/arriving' element={<Arriving />} />
        <Route path='/delivered' element={<Delivered />} />
        <Route path='/cancelled' element={<Cancelled />} />
        <Route path='/returned' element={<Returned />} />
        <Route path='/status' element={<OrderStatus />} />
      </Routes>
    </>
  )
}

export default App