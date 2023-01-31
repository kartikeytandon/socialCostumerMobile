import React, { useState } from 'react'
import './TopContent.css'
import { Link } from 'react-router-dom'

const TopContent = () => {
  const [activeLink, setActiveLink] = useState('')

  const handleClick = link => {
    setActiveLink(link)
  }
  
  return (
    <>
        <div className="orderBar">
            <p></p>
            <h3>Your Orders</h3>
        </div>
        <div className="orderNav">
            <Link to='/all' style={{ textDecoration: 'none', color: activeLink === 'all' ? 'black' : '#929292' }} onClick={() => handleClick('all')}>
              <li>All</li>
            </Link>
            <Link to='/arriving' style={{ textDecoration: 'none', color: activeLink === 'arriving' ? 'black' : '#929292' }} onClick={() => handleClick('arriving')}>
              <li>Ordered</li>
            </Link>
            <Link to='/delivered' style={{ textDecoration: 'none', color: activeLink === 'delivered' ? 'black' : '#929292' }} onClick={() => handleClick('delivered')}>
                <li>Delivered</li>
            </Link>
            <Link to='/cancelled' style={{ textDecoration: 'none', color: activeLink === 'cancelled' ? 'black' : '#929292' }} onClick={() => handleClick('cancelled')}>
                <li>Cancelled</li>
            </Link>
            <Link to='/returned' style={{ textDecoration: 'none', color: activeLink === 'returned' ? 'black' : '#929292' }} onClick={() => handleClick('returned')}>
                <li>Returned</li>
            </Link>
        </div>
    </>
  )
}

export default TopContent
