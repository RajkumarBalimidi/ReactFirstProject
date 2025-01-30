import React from 'react'

const Collections = (props) => {
    const {title, image1, image2, image3, image4, image5, image6} = props.gentsFashion;
  return (
    <div className='collections'>
        <h2>{title}</h2>
        <div className="menImages">
            <img src={image1} alt="Image Not Found" />
            <img src={image2} alt="Image Not Found" />
            <img src={image3} alt="Image Not Found" />
            <img src={image4} alt="Image Not Found" />
            <img src={image5} alt="Image Not Found" />
            <img src={image6} alt="Image Not Found" />
        </div>
    </div>
  )
}

export default Collections