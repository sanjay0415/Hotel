import React from 'react';
import './homeSub5.css';
import './index.css';

function HomeSub5(){
    return(
        <>
        <div className='footer'>

        {/* tieups */}
        <div className='tieUps'>
        <p className='tieupHeading'>Our TIE-UPS ☣</p>
        <div className='tieupImgDiv'>
        <img className='tieUpsImg' src="tieUps/akshayapatra.jpg" alt="error" />
        <img className='tieUpsImg' src="tieUps/bglrfood.png" alt="error" />
        <img className='tieUpsImg' src="tieUps/riseindia.png" alt="error" />
        </div>
        </div>

        {/* delivery partner */}
        <div className='delivery'>
        <p className='deliveryHeading'>Our DELIVERY Partner's...! 🛵</p>
        <div className='deliveryImgDiv'>
        <img className='deliveryImg' src="deliveryPartners/Zomato_logo.png" alt="" />
        <img className='deliveryImg' src="deliveryPartners/uber.png" alt="" />
        <img className='deliveryImg' src="deliveryPartners/swiggy.png" alt="" />
        <img className='deliveryImg' src="deliveryPartners/dunzo.jpg" alt="" />
        <img className='deliveryImg' src="deliveryPartners/doordash.webp" alt="" />
        <img className='deliveryImg' src="deliveryPartners/eatsure.jpg" alt="" />
        </div>
        </div>

        <div className='address'>
        <p>32, ELITE BANARAS, Gandhi Bazaar Main Rd, Gandhi Bazaar, Basavanagudi, Bengaluru, Karnataka 560004</p>
        <p>Phone: 080 2667 7588</p>
        </div>

        <p className='copyright'>©All rights reserved by ELITE BANARAS</p>

        </div>
        </>
    )
}

export default HomeSub5;