import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
        <div className='main-footer-containor'>
            <div className='footer-cafe-logo'>Shop Logo</div>
            <div className='footer-content-containor'>
                <div className='footer-contents'>
                    <div className='coulmn-1'>
                        <ul>
                            <li>About Us</li>
                            <li>Blogs</li>
                            <li>Branches</li>
                        </ul>
                    </div>
                    <div className='coulmn-1'>
                        <ul>
                            <li>Career</li>
                            <li>Contect</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                    <div className='coulmn-1'>
                        <ul>
                            <li>Services</li>
                            <li>Privacy & Policy</li>
                            <li>Other</li>
                        </ul>
                    </div>
                </div>
                <div className='social-connections'>
                    <img src="/Images/email.png" alt="email" className='social-image' />
                    <img src="/Images/email.png" alt="email" className='social-image' />
                    <img src="/Images/email.png" alt="email" className='social-image' />
                    <img src="/Images/email.png" alt="email" className='social-image' />
                    <img src="/Images/email.png" alt="email" className='social-image' />
                </div>
            </div>
            <div className='footer-content-3'>
                Some thing content
            </div>
        </div>   
    </>
  )
}

export default Footer
