import React from 'react'
import logo from '../../assets/logop.png'
import iphone from '../../assets/iPhone.png'
import spagg from '../../assets/Spaghetti.png'
import leaf from '../../assets/Leaf.png'
import img from '../../assets/firstimg.png'
import tomato from '../../assets/Tomato.png'
import pasta from '../../assets/Pasta.png'
import leaf2 from '../../assets/Leaf2.png'
import './Header.css'
import Link from '../Link/Link'

function Header() {
  return (
    <div className='header_bg top'>
         <img className='img' src={img} alt=''/>
        
        <div className='top_logo'>

            <div>
            <img className='logo' src={logo}
            alt='logo'/>
            </div>   

            <div className="contact">
                <div>
                    <h1>
                        EXPRESS DELIVERY
                    </h1>
                    <h2>
                        1800 258 88
                    </h2>
                </div>
                <img src={iphone} alt=''></img>

                <div>
                </div>
            </div>

        </div>

        <div className='nav_bar' >
            <Link text="Home" link="#Home" ></Link>
            <Link text="Menu" link="#Home" ></Link>
            <Link text="Our Story" link="#Home" ></Link>
            <Link text="Contact Us" link="#Home" ></Link>
        </div>

        <div className='title'>
            <div> 
            <p className='title1'>
                Are you hungry?
            </p>   
            <p className='title2'>
                DONT WAIT!
            </p>
            <p className='title3'>
                LETS START TO ORDER FOOD NOW
            </p>

            <div className='line'></div>

            <div className='lower_div'>
                <div>
                    <p className='title4'>
                        THIS MONDAY <br/> HAPPY HOURS
                    </p>

                </div>
                <div>
                    <p className='title5'>
                        1+1=3
                    </p>

                </div>
            </div>

            <div className='btn_div'>
                <div className='btn'>
                    <p>ORDER NOW</p>
                </div>
            </div>

            </div>
            


        </div>

        <img className='spagg' src={spagg} alt=''/>
        <img className='leaf' src={leaf} alt=''/>
        <img className='leaf2' src={leaf2} alt=''/>
       
        <img className='tomato' src={tomato} alt=''/>
        <img className='pasta' src={pasta} alt=''/> 

    </div>
  )
}

export default Header