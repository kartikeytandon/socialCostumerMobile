import React from 'react'
import next from '../../assets/next.png'
import headphones from '../../assets/headphones.png'
import TopContent from '../../TopContent/TopContent'

const All = () => {
  return (
    <>
        <TopContent />
        <main>
          <img src={headphones} alt="" />
          <div className="orderStatus">
            <h4>Order Status</h4>
            <p style={{ color: '#2FB84D', fontSize: '0.7rem' }}>Arriving 31 Dec</p>
            <p style={{ fontSize: '0.9rem' }}>boat wireless earphones</p>
          </div>
          <img src={next} alt="" />
        </main>
        <main>
          <img src={headphones} alt="" />
          <div className="orderStatus">
            <h4>Order Status</h4>
            <p style={{ color: '#2FB84D', fontSize: '0.7rem' }}>Delivered</p>
            <p style={{ fontSize: '0.9rem' }}>boat wireless earphones</p>
          </div>
          <img src={next} alt="" />
        </main>
        <main>
          <img src={headphones} alt="" />
          <div className="orderStatus">
            <h4>Order Status</h4>
            <p style={{ color: '#2FB84D', fontSize: '0.7rem' }}>Cancelled</p>
            <p style={{ fontSize: '0.9rem' }}>boat wireless earphones</p>
          </div>
          <img src={next} alt="" />
        </main>
        <main>
          <img src={headphones} alt="" />
          <div className="orderStatus">
            <h4>Order Status</h4>
            <p style={{ color: '#2FB84D', fontSize: '0.7rem' }}>Returned</p>
            <p style={{ fontSize: '0.9rem' }}>boat wireless earphones</p>
          </div>
          <img src={next} alt="" />
        </main>
    </>
  )
}

export default All