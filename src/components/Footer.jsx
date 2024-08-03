import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons'
import google from '../assets/google.webp'
import appstore from '../assets/appstore.webp'



function Footer() {
  return (
    <>
    <div className="container-fluid">
        <div className="row mt-5">
            <div className="col-md-3">
                <h4>Company</h4>
                <p className='mt-5'>About Us</p>
                <p>Careers</p>
            </div>
            <div className="col-md-4">
                <h4>View Website In</h4>
                <p className='mt-5'><FontAwesomeIcon icon={faCheck} style={{color: "#6f7276",}} className='me-3' />English</p>
                
            </div>
            <div className="col-md-3">
                <h4>Need Help?</h4>
                <p className='mt-5'>Visit Help Center</p>
                <p>Share Feedback</p>
            </div>
            <div className="col-md-2">
                <h4>Connect with Us</h4>
                <div className='mt-5'>
                    <FontAwesomeIcon icon={faTwitter} size='xl' style={{marginRight:'50px'}}/>
                    <FontAwesomeIcon icon={faFacebookF} size='xl'/>
                </div>
            </div>
        </div>

        <div className="row mt-3">
            <div className="col-md-8">
                <p>@ 2024 STAR.All Right Reserved.</p>
                <p>Terms Of Use Privacy Policy FAQ</p>
            </div>
            <div className="col-md-4">
                
                    <img src={google} alt='image1' width={'140px'} className='me-3'/>
                    <img src={appstore} alt='image1' width={'140px'}/>
                

            </div>
        </div>
    </div>
    </>
  )
}

export default Footer
