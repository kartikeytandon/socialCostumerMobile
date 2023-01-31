import React from 'react'
import AccInfo from './AccInfo/AccInfo'
import HelloUser from './HelloUser/HelloUser'
import Help from './Help/Help'
import Policy from './Policy/Policy'

const Home = () => {
  return (
    <div>
        <HelloUser />
        <Help />
        <AccInfo />
        <Policy />
    </div>
  )
}

export default Home