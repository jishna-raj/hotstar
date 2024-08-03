import React, { useState } from 'react'
import { useRef } from 'react';
import './home.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import one2 from '../assets/one2.webp'
import two2 from '../assets/two2.webp'
import three3 from '../assets/three3.webp'
import four2 from '../assets/four2.webp'
import five2 from '../assets/five2.webp'
import six2 from '../assets/six2.webp'
import seven2 from '../assets/seven2.webp'
import eight2 from '../assets/eight2.webp'
import nine2 from '../assets/nine2.webp'
import ten2 from '../assets/ten2.webp'
import eleven from '../assets/eleven.webp'
import one1 from '../assets/one1.webp'
import two1 from '../assets/two1.webp'
import three1 from '../assets/three1.webp'
import four1 from '../assets/four1.webp'
import five1 from '../assets/five1.webp'
import six1 from '../assets/six1.webp'
import seven1 from '../assets/seven1.webp'
import eight1 from '../assets/eight1.webp'
import one from '../assets/one.webp'
import two from '../assets/two.webp'
import three from '../assets/three.webp'
import four from '../assets/four.webp'
import five from '../assets/five.webp'
import six from '../assets/six.webp'
import seven from '../assets/seven.webp'
import eight from '../assets/eight.webp'
import nine from '../assets/nine.webp'
import ten from '../assets/ten.webp'
import one3 from '../assets/one3.webp'
import two3 from '../assets/two3.webp'
import three2 from '../assets/three2.webp'
import four3 from '../assets/four3.webp'
import five3 from '../assets/five3.webp'
import six3 from '../assets/six3.webp'
import seven3 from '../assets/seven3.webp'
import eight3 from '../assets/eight3.webp'
import nine3 from '../assets/nine.webp'
import ten3 from '../assets/ten3.webp'
import eleven3 from '../assets/eleven3.webp'
import seven4 from '../assets/seven4.webp'
import two4 from '../assets/two4.webp'
import three4 from '../assets/three4.webp'
import one5 from '../assets/one5.webp'
import two5 from '../assets/two5.webp'
import three5 from '../assets/three5.webp'
import four5 from '../assets/four5.webp'
import five5 from '../assets/five5.webp'
import six5 from '../assets/six5.webp'
import seven5 from '../assets/seven5.webp'
import eight5 from '../assets/eight5.webp'
import nine5 from '../assets/nine5.webp'
import ten5 from '../assets/ten5.webp'
import eleven5 from '../assets/eleven5.webp'
import one6 from '../assets/one6.webp'
import two6 from '../assets/two6.webp'
import four6 from '../assets/four6.webp'
import five6 from '../assets/five6.webp'
import six6 from '../assets/six6.webp'
import seven6 from '../assets/seven6.webp'
import star from '../assets/star.mp4'
import disney from '../assets/disney.mp4'
import hotstar from '../assets/hotstar.mp4'
import marvel from '../assets/marvel.mp4'
import National from '../assets/National.mp4'
import l1 from '../assets/l1.webp'
import l2 from '../assets/l2.webp'
import l3 from '../assets/l3.webp'
import l4 from '../assets/l4.webp'
import l5 from '../assets/l5.webp'
import l6 from '../assets/l6.webp'
import l7 from '../assets/l7.webp'
import l8 from '../assets/l8.webp'
import l9 from '../assets/l9.webp'
import l10 from '../assets/l10.webp'
import l11 from '../assets/l11.webp'
import l21 from '../assets/l21.webp'
import l31 from '../assets/l31.webp'
import l41 from '../assets/l41.webp'
import l51 from '../assets/l51.webp'
import l61 from '../assets/l61.webp'
import l71 from '../assets/l71.webp'
import l81 from '../assets/l81.webp'
import l91 from '../assets/l91.webp'
import l101 from '../assets/l101.webp'
import l111 from '../assets/l111.webp'
import l13 from '../assets/l13.webp'






function Home() {

  const [hoverIndex, setHoverIndex] = useState(null);
  const videoRefs = useRef([]);

  const handleMouseEnter = (index) => {
      setHoverIndex(index);
      if (videoRefs.current[index]) {
          videoRefs.current[index].play();
      }
  };

  const handleMouseLeave = (index) => {
      setHoverIndex(null);
      if (videoRefs.current[index]) {
          videoRefs.current[index].pause();
      }
  };

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

  return (
    <>
    <div className="container-fluid" style={{marginLeft:'78px'}}>

<div>
            <h4 className=' ms-3' style={{fontSize:'22px', color:'white'}}>Latest Release</h4>
    
            <div className="slider-container">
          <Slider {...settings}>
            <div>
              <img src={one} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={two} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={three} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={four} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={five} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={six} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={seven} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={eight} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={nine} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={ten} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={eleven} alt='image'width={'80%'}/>
            </div>
            <div>
            <img src={two} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={three} alt='image'width={'80%'} />
            </div>
          </Slider>
        </div>
</div>


    <div>
        <h4 className='ms-3' style={{fontSize:'22px', color:'white'}}>Hotstar Specials</h4>
    
            <div className="slider-container">
          <Slider {...settings}>
            <div>
              <img src={one3} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={two3} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={three2} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={four3} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={five3} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={six3} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={seven3} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={eight3} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={nine3} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={ten3} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={eleven3} alt='image'width={'80%'}/>
            </div>
            <div>
            <img src={six} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={one2} alt='image'width={'80%'} />
            </div>
          </Slider>
        </div>
    </div>

    <div>
        <h4 className='ms-3' style={{fontSize:'22px', color:'white'}}>Popular Shows</h4>
    
            <div className="slider-container">
          <Slider {...settings}>
            <div>
              <img src={one1} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={two1} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={three1} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={four1} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={five1} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={six1} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={seven1} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={eight} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={nine} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={ten} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={eleven} alt='image'width={'80%'}/>
            </div>
            <div>
            <img src={two} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={three} alt='image'width={'80%'} />
            </div>
          </Slider>
        </div>
    </div>

    <div>
        <h4 className='ms-3' style={{fontSize:'22px', color:'white'}}>Friendship Day Specials</h4>
    
            <div className="slider-container">
          <Slider {...settings}>
            <div>
              <img src={one2} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={two2} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={three3} alt='image' width={'80%'}/>
            </div>
            <div className='mt-4'>
            <img src={four2} alt='image' width={'83%'}/>
            </div>
            <div className='mt-4'>
            <img src={five2} alt='image' width={'83%'}/>
            </div>
            <div className='mt-4'>
            <img src={six2} alt='image' width={'83%'}/>
            </div>
            <div className='mt-4'>
            <img src={seven2} alt='image' width={'83%'}/>
            </div>
            <div>
            <img src={eight2} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={nine2} alt='image' width={'80%'}/>
            </div>
            <div className='mt-4'>
            <img src={ten2} alt='image' width={'83%'} height={'210px'}/>
            </div>
            <div>
            <img src={eight} alt='image'width={'80%'}/>
            </div>
            <div>
            <img src={four1} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={three} alt='image'width={'80%'} />
            </div>
          </Slider>
        </div>
    </div>

    <div>
        <h4 className='ms-3' style={{fontSize:'22px', color:'white'}}>StarPlus Shows</h4>
    
            <div className="slider-container">
          <Slider {...settings}>
            <div>
              <img src={three4} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={two2} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={three2} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={four} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={two4} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={seven4} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={six1} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={five} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={nine} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={three} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={eleven3} alt='image'width={'80%'}/>
            </div>
            <div>
            <img src={one} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={three} alt='image'width={'80%'} />
            </div>
          </Slider>
        </div>
    </div>

    <div>
        <h3 className='ms-3' style={{fontSize:'22px', color:'white'}}>Entertainment All-Rounders</h3>
    
            <div className="slider-container">
          <Slider {...settings}>
            <div>
              <img src={one5} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={two5} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={three5} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={four5} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={five5} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={six5} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={seven5} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={eight5} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={nine5} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={ten5} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={eleven5} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={eleven3} alt='image'width={'80%'}/>
            </div>
            <div>
            <img src={two4} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={three3} alt='image'width={'80%'} />
            </div>
          </Slider>
        </div>
    </div>

    <div>
        <h3 className='ms-3' style={{fontSize:'22px', color:'white'}}>Popular Movies</h3>
    
            <div className="slider-container">
          <Slider {...settings}>
            <div>
              <img src={three4} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={five5} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={one6} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={two6} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={six5} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={four6} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={five6} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={six6} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={seven6} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={eight2} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={nine5} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={eleven3} alt='image'width={'80%'}/>
            </div>
            <div>
            <img src={one5} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={three3} alt='image'width={'80%'} />
            </div>
          </Slider>
        </div>
    </div>

    <div className="row">
                {[
                    disney,
                    marvel,
                    star,
                    National,
                    hotstar
                    
                    
                ].map((src, index) => (
                    <div
                        key={index}
                        className="col-md-2 video-container"
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                    >
                        <video
                            ref={(el) => (videoRefs.current[index] = el)}
                            muted
                            autoPlay={false}
                            playsInline
                            loop
                            style={{
                                width: '100%',
                                height: '70%',
                                objectFit: 'cover',
                                padding:'0px'
                            }}
                        >
                            <source src={src} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                ))}
            </div>

            <div>
            <h4 className=' ms-3 mb-3' style={{fontSize:'22px', color:'white'}}>Popular Languages</h4>
    
            <div className="slider-container" id='slider-container'>
          <Slider {...settings}>
            <div>
              <img src={l1} alt='image' width={'90%'}/>
            </div>
            <div>
            <img src={l2} alt='image' width={'90%'}/>
            </div>
            <div>
            <img src={l3} alt='image' width={'90%'}/>
            </div>
            <div>
            <img src={l4} alt='image' width={'90%'}/>
            </div>
            <div>
            <img src={l5} alt='image' width={'90%'}/>
            </div>
            <div>
            <img src={l6} alt='image' width={'90%'}/>
            </div>
            <div>
            <img src={l7} alt='image' width={'90%'}/>
            </div>
            <div>
            <img src={l8} alt='image' width={'90%'}/>
            </div>
            <div>
            <img src={l9} alt='image' width={'90%'}/>
            </div>
            <div>
            <img src={l10} alt='image' width={'90%'}/>
            </div>
            <div>
            <img src={l11} alt='image' width={'90%'}/>
            </div>
          </Slider>
        </div>
            </div>

            <div>
            <h4 className=' ms-3 mb-3 mt-4' style={{fontSize:'22px', color:'white'}}>Popular Genres</h4>
    
            <div className="slider-container" id='slider-container'>
          <Slider {...settings}>
            <div>
              <img src={l111} alt='image' width={'90%'}/>
            </div>
            <div>
            <img src={l21} alt='image' width={'90%'}/>
            </div>
            <div>
            <img src={l31} alt='image' width={'90%'}/>
            </div>
            <div>
            <img src={l41} alt='image' width={'90%'}/>
            </div>
            <div>
            <img src={l51} alt='image' width={'90%'}/>
            </div>
            <div>
            <img src={l61} alt='image' width={'90%'}/>
            </div>
            <div>
            <img src={l71} alt='image' width={'90%'}/>
            </div>
            <div>
            <img src={l81} alt='image' width={'90%'}/>
            </div>
            <div>
            <img src={l91} alt='image' width={'90%'}/>
            </div>
            <div>
            <img src={l101} alt='image' width={'90%'}/>
            </div>
            <div>
            <img src={l111} alt='image' width={'90%'}/>
            </div>
            <div>
            <img src={l13} alt='image' width={'90%'}/>
            </div>
          </Slider>
        </div>
           </div>


           <div>
        <h4 className='ms-3 mt-3' style={{fontSize:'22px', color:'white'}}>Popular in Drama</h4>
    
            <div className="slider-container" >
          <Slider {...settings}>
            <div>
              <img src={one1} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={two2} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={four1} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={four} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={four3} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={five1} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={six1} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={five} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={nine} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={three} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={eleven} alt='image'width={'80%'}/>
            </div>
            <div>
            <img src={one} alt='image' width={'80%'}/>
            </div>
            <div>
            <img src={three} alt='image'width={'80%'} />
            </div>
          </Slider>
        </div>
    </div>




        
    </div>
    
    </>
  )
}

export default Home