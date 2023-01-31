import React from 'react'
import './Orders.css'
import Arriving from '../Arriving/Arriving'
import Delivered from '../Delivered/Delivered'
import Cancelled from '../Cancelled/Cancelled'
import Returned from '../Returned/Returned'
import { Link } from 'react-router-dom'

const Orders = () => {
  return (
    <div className="orders">
        <Arriving />
        <Delivered />
        <Cancelled />
        <Returned />
    </div>
  )
}

export default Orders