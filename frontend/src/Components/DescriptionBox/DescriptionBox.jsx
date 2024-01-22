import './DescriptionBox.css'

import React from 'react'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews(122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita suscipit ad fugiat, deleniti voluptates qui quod iure beatae laborum exercitationem! Blanditiis possimus esse nam laborum unde. Dignissimos architecto tenetur nesciunt?</p>
        </div>
    </div>
  )
}

export default DescriptionBox