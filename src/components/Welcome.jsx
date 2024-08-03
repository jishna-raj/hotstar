import { faCircle, faPlay, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef, useEffect } from 'react';
import bheeshma from '../assets/bheeshma.mp4';
import './welcome.css';
import bheesh from '../assets/bheesh.png'




function Welcome() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 5; // Skip the first 5 seconds
    }
  }, []);

  const handleVideoEnd = () => {
    // Handle video end event if needed
  };

  return (
    <div style={{ height: '100%', width: '100%', position: 'relative' }}>
      {/* Background video */}
      <video
        ref={videoRef}
        muted
        autoPlay
        playsInline
        loop
        onEnded={handleVideoEnd}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom:0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1
        }}
      >
        <source src={bheeshma} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Foreground content */}
      <div style={{ position: 'relative', zIndex: 1, color: '#fff', padding: '20px' }}>
        <div className="row">
          <div className="col-md-6">
            <div className='d-flex flex-column align-items-start '>
                <img src= {bheesh} alt='img' width={'220px'}/>
                <div className='d-flex'>
                    <h6 className="ms-3 mb-3 dot-separator"><span>2022</span><span>2h 51m</span><span>Malayalam</span>
        </h6>
        <button className='btn button2 ms-3 mb-2'>U/A 13+</button>
                </div>
            </div>
            <p className="ms-3" style={{ textAlign: 'justify', fontWeight: '200',color:'white' }}>
              "Michael, a once-feared gangster who has retired from his violent past and is now living a quiet life. However, his past comes back to haunt him when he is drawn into a conflict that forces him to confront old enemies and navigate complex family dynamics.
            </p>
            <p className="mt-2 mb-3 ms-3 vertical-line-text"><span>Thriller</span><span>Tragedy</span><span>Action</span><span>Power Struggle</span>
</p>
           <div className='d-flex'>
                <button className="btn button1 px-4  ms-2 rounded-2 shadow" style={{height:'50px',width:'400px',color:'black'}}>
                  <FontAwesomeIcon icon={faPlay} style={{ color: 'black', marginRight: '20px' }} />
                  Subscribe to Watch
                </button>
                <button className='btn button2 ms-4 rounded-2'><FontAwesomeIcon icon={faPlus} style={{color: "#f1f4f9",}} /></button>
           </div>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
