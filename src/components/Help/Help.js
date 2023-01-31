import React from 'react'
import './Help.css'
import orders from '../../assets/orders.png'
import wishlist from '../../assets/wishlist.png'
import helpCenter from '../../assets/helpCenter.png'
import faq from '../../assets/faq.png'
import { Link } from 'react-router-dom'

const Help = () => {
  return (
    <div className="help">
        <div>
            <div className="helpItem">
                <img src={orders} alt="" />
                <Link to='/all' style={{ textDecoration: 'none' }}>
                    <p>Orders</p>
                </Link>
            </div>
            <div className="helpItem">
                <img src={wishlist} alt="" />
                <p>Wishlist</p>
            </div>
        </div>
        <div>
            <div className="helpItem">
                <img src={helpCenter} alt="" />
                <p>Help Center</p>
            </div>
            <div className="helpItem">
                <img src={faq} alt="" />
                <p>FAQs</p>
            </div>
        </div>
    </div>
  )
}

export default Help