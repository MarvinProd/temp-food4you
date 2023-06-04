import React from 'react'
import './Footer.css'
import logo from '../../assets/logo_footer.png'
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import {BsWhatsapp } from 'react-icons/bs';
import {MdEmail } from 'react-icons/md';
import {ImLocation2} from 'react-icons/im';



function Footer() {
  return (
    <div className='footer_bg footer'>
      <div className='footer_body'>

        <div className='logo_footer'>
          <img src={logo} alt=''/>

        </div>

        <div className='footer_2'>

          <div className='foot_text'> 

            <p>
              Lorem, ipsum dolor sit amet consectetur 
              adipisicing elit. Architecto, harum! Quam ipsam, 
              earum vero deleniti veritatis, quisquam vel quis 
              voluptatem inventore incidunt et consequatur voluptas! 
              Voluptatem maiores odit ipsam aut
            </p>

          </div>

          <div className='email_gps_div'>

          <div className='gps'>
              <div>
                <ImLocation2/>

              </div>

              <div>
                
                <p>
                  Main Road, Building Name, Country
                </p>

              </div>
            </div> 
          <div className='email'>
              <div>
                <MdEmail/>

              </div>

              <div>
                
                <p>
                  info@companyname.com
                </p>

              </div>
            </div>
            

          </div>

        </div>

        <div className='footer_3'>
          <div>
            <p>
             © Company Name,All Rights Reserved

            </p>

          </div>

          <div className='last_svg'>
            <BsWhatsapp href='#'/>
            <FiFacebook href='#'/>
            <FiInstagram href='#'/>
            <FiTwitter href='#'/>



          </div>


        </div>

      </div>
            
    </div>
  )
}

export default Footer