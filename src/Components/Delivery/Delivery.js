import React from 'react'
import './Delivery.css';
import img from '../../Assets/Img/deliverybanner.png';
import Image from "react-bootstrap/Image";
export default function Delivery() {
  return (
    <div className="container delivery">
      <Image src={img} fluid alt="" />
    </div>
  );
}
