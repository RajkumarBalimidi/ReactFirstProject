import React from 'react'

const WomanCollection = (props) => {
    const{title, image1, image2, image3, image4, image5, image6} = props.ladiesFashion;
  return (
    <div className='collections'>
        <h2>{title}</h2>
        <div className="bannerBox">
            <img src="https://i.pinimg.com/originals/cc/b3/4f/ccb34f51bba6597deec3bf36ed654315.gif" alt="Image Not Found"/>
        </div>
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

export default WomanCollection