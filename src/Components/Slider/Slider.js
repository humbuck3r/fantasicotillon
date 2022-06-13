import React from 'react'
import {Carousel} from 'react-bootstrap';
import img3 from '../../Assets/Img/slider1.png'
import img from '../../Assets/Img/semana del trabajo.png'
import img2 from '../../Assets/Img/slider.jpg'
import '../Slider/Slider.css'

export default function Slider() {
  return (
    <div className=' slider'>
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={img3} alt="First slide" />
          <Carousel.Caption>
         
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="Second slide" />

          <Carousel.Caption>
          
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img} alt="Third slide" />

          <Carousel.Caption>
          
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

