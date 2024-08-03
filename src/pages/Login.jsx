import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import post from '../assets/post.jpg'
import {  faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function Login() {

  const [phone, setPhone] = useState("")
  return (
    <div className='container-fluid'>
      <div className="row">
        <div className="col-md-6" style={{
          backgroundImage: `linear-gradient(to left,rgba(0,0,0,7), rgba(0,0,0,0.4)), url(${post})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh'
        }}>
          <Link to={'/'}><FontAwesomeIcon icon={faHouse} style={{color: "#ebedef",}} /></Link>

        </div>
        <div className="col-md-6">
          <h1 className='text-center' style={{ fontSize: '20px', fontWeight: '400', marginTop: '30px' }}>Log in or sign up to countinue</h1>


          <div className='row'>
            <div className="col-md-3"></div>

            <div className="col-md-7 mt-5 ">
              <PhoneInput inputStyle={{ backgroundColor: 'black', color: 'white' }}
                country={'us'}
                value={phone}
                placeholder='Enter mobile number'
                onChange={phone => setPhone({ phone })}
              />

              <h6 className='mt-3' style={{ color: "#757575", fontSize: "15px" }} >By proceeding you confirm that you are above 18 years of age and agree to the Privacy Policy and Terms of use</h6>

              <button className='btn button rounded shadow' style={{ marginTop: '250px', height: '50px', width: '350px' }}>Verify Otp</button>
            </div>


            <div className="col-md-2"></div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Login;
