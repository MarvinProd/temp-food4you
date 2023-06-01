import React from 'react'
import './Body.css'
import Firstlayer from '../Contents/First_layer/FirstLayer'
import SecondLayer from '../Contents/SecondLayer/SecondLayer'
import ThirdLayer from '../Contents/ThirdLayer/ThirdLayer'

function Body() {
  return (
    <div>
         <Firstlayer/> 
          <SecondLayer/>
          <ThirdLayer/> 
        
    </div>
  )
}

export default Body