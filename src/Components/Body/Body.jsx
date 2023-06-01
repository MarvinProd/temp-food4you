import React from 'react'
import './Body.css'
import Firstlayer from '../Contents/FirstLayer/FirstLayer'
import SecondLayer from '../Contents/SecondLayer/SecondLayer'
import ThirdLayer from '../Contents/ThirdLayer/ThirdLayer'
import FourthLayer from '../Contents/FourthLayer/FourthLayer'

function Body() {
  return (
    <div>
         <Firstlayer/> 
          <SecondLayer/>
          <ThirdLayer/> 
          <FourthLayer/>
        
    </div>
  )
}

export default Body