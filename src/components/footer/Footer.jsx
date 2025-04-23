import React from 'react'
import "./footer.css"
import { BiLogoFacebook } from "react-icons/bi";
import { IoLogoInstagram } from "react-icons/io";
import { TiSocialTwitter } from "react-icons/ti";
import { IoLogoLinkedin } from "react-icons/io";

const Footer = () => {
  return (
    <div className='Footerbody'>
      <div className='Footercontainer1'>
        <span className='Footercontainer1span'>
        <img src='/Frame 2529 (1).png'  className='Footercontainer1spanimg'/>
        </span>
        <span className='Footercontainer1span'>
          <h3 className='Footercontainer1spanh3'>Terms & Conditions</h3>
          <p className='Footercontainer1spanp'>Terms of service</p>
          <p className='Footercontainer1spanp'>Host Agreement</p>
          <p className='Footercontainer1spanp'>Community Guidelines</p>
          <p className='Footercontainer1spanp'>Refund & Cancellation Policy</p>
        </span>
        <span className='Footercontainer1span'>
          <h3 className='Footercontainer1spanh3'>Privacy Policy</h3>
          <p className='Footercontainer1spanp'>Security Policy</p>
          <p className='Footercontainer1spanp'>Cookie Policy</p>
          <p className='Footercontainer1spanp'>User Rights & Data Access</p>
          <p className='Footercontainer1spanp'>Data Protection  Policy</p>
        </span>
        <span className='Footercontainer1span'>
          <h3 className='Footercontainer1spanh3'>Contact Us</h3>
          <p className='Footercontainer1spanp'>FAQs</p>
          <p className='Footercontainer1spanp'>WhatsApp Support</p>
          <p className='Footercontainer1spanp'>Community Forum</p>
        </span>
      </div>
      <div className='Footercontainer2'>
      <p className='Footercontainer2p'>© 2025 HubSpot. All rights reserved</p>
        <main className='Footercontainer2main'>
        <a href='https://www.facebook.com/profile.php?id=61575549950800' className='Footercontainer2span'><BiLogoFacebook /></a>
        <a href='https://www.instagram.com/hubspotlagos?igsh=MWdndXBnMGswbGlvZA%3D%3D' className='Footercontainer2span'><IoLogoInstagram /></a>
        <a href='https://x.com/HubspotNigeria' className='Footercontainer2span'><TiSocialTwitter /></a>
        <a href='https://www.linkedin.com/company/hubspot-nigeria/about/?viewAsMember=true' className='Footercontainer2span'><IoLogoLinkedin /></a>
        </main>
      
      </div>
    </div>
  )
}

export default Footer
