import React from 'react'
import './AccInfo.css'

const AccInfo = () => {
  return (
    <div className="accInfo">
        <h3>Account Information</h3>
        <div className="info">
            <li><span style={{ fontWeight: '600', marginRight: '0.6rem' }}>Mobile </span> <span>7403284092</span></li>
            <li><span style={{ fontWeight: '600', marginRight: '0.6rem' }}>Name </span> <span>Kartikey</span></li>
            <li><span style={{ fontWeight: '600', marginRight: '0.6rem' }}>Email </span> <span>social@gmail.com</span></li>
        </div>
        <p style={{ color: '#7465B6', fontSize: '1.1rem', fontWeight: '600', marginTop: '1rem' }}>Change Password</p>
    </div>
  )
}

export default AccInfo