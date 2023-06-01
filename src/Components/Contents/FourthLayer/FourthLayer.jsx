import React from 'react'
import './FourthLayer.css'

function FourthLayer() {
  return (
    <div className='div_body4'>

        <div className="div_text">
            <h1>
                RESERVATIONS
            </h1>

            <p>
                BOOK YOUR TABLE
            </p>
        </div>


        <div className="div_body_1">
            <div className="div_one">
            <input type="" placeholder="Name" />
            <input type="date" placeholder="Date" />
            <input type="" placeholder="People" />

            </div>

            <div className="div_two">
            <input type="email" placeholder="Email" />
            <input type="time" placeholder="Time" />
            <div className='btn_4'>
                <p>
                    FIND A TABLE
                </p>

            </div>


            </div>
        </div>
       
        
    </div>
  )
}

export default FourthLayer