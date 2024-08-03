import { faCircleInfo, faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import myspace from '../assets/myspace.webp';
import back from '../assets/back.jpg';
import { Link } from 'react-router-dom';

function Start() {
  return (

   <>
      <div
        className="container-fluid w-100"
        style={{
          height: '100vh',
          backgroundImage: `
            linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.7),
              rgba(0, 0, 0, 0.4)
            ),
            url(${back})
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="row">
          <div className="col-md-9 mt-4">
            <Link to={'/'}><FontAwesomeIcon icon={faHouse} style={{color: "#ebedef",}} /></Link>
          </div> 
          <div className="col-md-3 d-flex justify-content-end align-items-start mt-5">
            <button
              className='btn button2'
              style={{
                width: '265px',
                height: '55px',
                marginRight:'50px'
              }}
            >
              <FontAwesomeIcon
                icon={faCircleInfo}
                style={{ color: '#f2f2f2', marginRight: '10px' }}
              />
              Help & Support
            </button>
          </div>
        </div>
  
        <div className="row w-100">
          <div className="col-md-3"></div>
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center" style={{marginTop:'60px'}}>
            <img
              src={myspace}
              alt='login'
              height='150px'
            />
            <h3 className='mt-3' style={{ fontWeight: '800' }}>
              Login to Disney + Hotstar
            </h3>
            <p style={{ fontSize: '18px', fontWeight: '600', textAlign: 'center' }}>
              Start watching from where you left off, personalise for kids and more
            </p>
            <Link to={'/login'}>
              <button
                className='btn'
                style={{
                  width: '210px',
                  height: '50px',
                  backgroundColor: '#0d47a1',
                  borderColor: '#0d47a1'
                }}
              >
                Login
              </button>
            </Link>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
   </>
  );
}

export default Start;
