import React from 'react'
import './FirstLayer.css'
import food1 from '../../../assets/food/food1.png'
import bread from '../../../assets/food/Bread.png'
import food2 from '../../../assets/food/food2.png'
import rec from '../../../assets/Rectangle.svg'

function FirstLayer() {
  return (
    <div className='body_div'>

      <img className='back' src= {rec} alt=''></img>


        <div className="title_lay">
            <p className='t1'>CHOOSE & ENJOY</p>
            <p className='t2'> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Voluptate assumenda non odit quisquam blanditiis incidunt voluptatem neque, voluptates, alias nihil omnis expedita 
                architecto doloremque qui ratione temporibus fuga eum quos!</p>
        </div>

        <div className='menu'>
          <div className='list'>
            <div>
              <img src={food1} alt=''></img>

            </div>
            <div className='text_div'>
              <h1>Lorem ipsum dolor</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit ratione, quos cupiditate eius commodi</p>

            </div>
            <div className='cover'>
            <div className='btn_div2'>
              <p>ORDER NOW

              </p>


            </div>

            </div>
          </div>
          <div className='list'>
            <div>
              <img src={bread} alt=''></img>

            </div>
            <div className='text_div'>
              <h1>Lorem ipsum dolor</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit ratione, quos cupiditate eius commodi</p>

            </div>
            <div className='cover'>
            <div className='btn_div2'>
              <p>ORDER NOW

              </p>


            </div>

            </div>
          </div>
          <div className='list'>
            <div >
              <img src={food2} alt=''></img>

            </div>
            <div className='text_div'>
              <h1>Lorem ipsum dolor</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit ratione, quos cupiditate eius commodi</p>

            </div>
            <div className='cover'>
            <div className='btn_div2'>
              <p>ORDER NOW

              </p>


            </div>

            </div>

          </div>
        </div>

    </div>
  )
}

export default FirstLayer


