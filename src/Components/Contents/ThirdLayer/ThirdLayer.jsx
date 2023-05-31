import React from 'react'
import './ThirdLayer.css'
import img1 from '../../../assets/layer/Image.png'
import img2 from '../../../assets/layer/Image2.png'
import img3 from '../../../assets/layer/Image3.png'

function ThirdLayer() {
  return (
    <div className='body_div2'>
        <div className='div_body3'>

        <div className='div1'>
        <img src={img1} alt='' />
            <h1 >
                TRY IT TODAY
            </h1>

            <p>
                MOST <br/> POPULAR <br/> PASTA
            </p>           

        </div>
        <div className='div_body'>
            <div className='div2'>
            <img src={img2} alt='' />
            <h1 >
                TRY IT TODAY
            </h1>

            <p>
                MORE FUN <br/> MORE TASTE
            </p>

            </div>

            <div className='div3'>
            <img src={img3} alt='' />
            <h1 >
                TRY IT TODAY
            </h1>

            <p>
                FRESH & CHILI
            </p>

            </div>
        </div>

        </div>

        
    </div>
  )
}

export default ThirdLayer