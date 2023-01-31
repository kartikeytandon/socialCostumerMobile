import React from 'react'
import './Policy.css'
import lang from '../../assets/lang.png'
import policy from '../../assets/policy.png'

const Policy = () => {
  return (
    <>
        <div className="policy">
            <div className="policyItem">
                <img src={lang} alt="" />
                <p>Change Language</p>
            </div>
            <div className="policyItem">
                <img src={policy} alt="" />
                <p>Terms & Conditions</p>
            </div>
        </div>
        <div id='btn'>
            <button>Logout</button>
        </div>
    </>
  )
}

export default Policy