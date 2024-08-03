import React, { useState } from 'react';
import logo from "../assets/logo.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faSearch, faHome, faTv, faFilm , faBaseball,faList } from '@fortawesome/free-solid-svg-icons';
import { Fade } from "react-awesome-reveal";
import { Link } from 'react-router-dom';
import './header.css'



function Header() {
  const [touch, setTouch] = useState(false);

  return (
    <>
      <div className='header-container' style={{zIndex:'20'}}>
        <div className='row w-100 m-0 p-0'>
       
          <div className="col-md-2" id='nav' style={{ height: '100vh',  textAlign: 'center' }}>
            <div className='d-flex flex-column align-items-center' onMouseEnter={() => setTouch(true)} onMouseLeave={() => setTouch(false)}>
             <div> <img src={logo} alt="Logo" style={{ width: "55px", marginTop: '30px', marginBottom: '20px', marginLeft:'30px' }} /></div>
              <Link to ='/Login'><FontAwesomeIcon icon={faCircleUser} size="sm" className='mb-5 mt-4' style={{color: "#eceff4",}} /></Link>
              <FontAwesomeIcon icon={faSearch} size="sm" className='mb-5' style={{ color: "#e3e7ee" }} />
              <FontAwesomeIcon icon={faHome} size="sm" className='mb-5' style={{ color: "#f0f2f4" }} />
              <FontAwesomeIcon icon={faTv} size="sm" className='mb-5' style={{color: "#eaecf1",}} />
              <Link to={'/movies'}><FontAwesomeIcon icon={faFilm} size="sm" className='mb-5' style={{color: "#e8eaee",}} /></Link>
              <FontAwesomeIcon icon={faBaseball} size="sm" className='mb-5'  style={{color: "#f7f7f7",}} />
              <FontAwesomeIcon icon={faList} size="sm" className='mb-5' style={{color: "#f2f4f8",}} />
            </div>
          </div>
          
          
          <div className="col-md-10 m-0 p-0">
          <div className='row m-0 p-0' id='fade' style={{width:'40px'}}>
          {touch && (
          <Fade>
          <div className="col-md-4 " id='navbar' style={{ height: '100vh', textAlign: 'center', fontWeight: 'bold', color: 'white',opacity:'0.7',marginTop:'75px' ,marginLeft:'11px'}}>
        
          <h4 className='mb-5 pt-5' style={{ fontSize: '17px',marginTop:'63px' }}>MySpace</h4>
          <h4 className='mb-5' style={{ fontSize: '17px' }}>Search</h4>
          <h4 className='mb-4' style={{ fontSize: '17px', marginTop:'25px' }}>Home</h4>
          <h4 style={{ fontSize: '17px',marginTop:'33px',marginBottom:'37px' }}>Tv</h4>
          <Link to={'/movies'}><h4 className='mb-5' style={{ fontSize: '17px' }}>Movies</h4></Link>
          <h4 className='mb-5' style={{ fontSize: '17px' }}>Sports</h4>
          <h4 className='mb-5' style={{ fontSize: '17px' }}>Categories</h4>
        
      </div>
    </Fade>
  )}
  
  <div className="col-md-8"></div>
  </div>
          </div>
        </div>
      </div>
  
  
    </>
  );
}

export default Header;