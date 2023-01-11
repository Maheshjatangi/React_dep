import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../Components/Banner.css'
function Banner() {
  return (
    <div className='banner-img'>
         <Carousel showIndicators={false} showThumbs={false} showStatus={false} showArrows={true}>
                <div>
                    <img src={require('../Components/images/1.jpg')} />
                    <div className='text'>
              <h1>Videos</h1>
              <p>Enjoy our collection of lifestyle and recipe videos</p>
            </div>
                </div>
                <div>
                <img src={require('../Components/images/2.jpg')} />
                <div className='text'>
              <h1>recipe</h1>
              <p>Enjoy our collection of lifestyle and recipe videos</p>
            </div>
                </div>
                <div>
                <img src={require('../Components/images/3.jpg')} />
                <div className='text'>
              <h1>Mission</h1>
              <p>Enjoy our collection of lifestyle and recipe videos</p>
            </div>
                </div>
                <div>
                <img src={require('../Components/images/4.jpg')} />
                <div className='text'>
              <h1>Shop</h1>
              <p>Enjoy our collection of lifestyle and recipe videos</p>
            </div>
                </div>
            </Carousel>
            
    </div>

  )
}

export default Banner