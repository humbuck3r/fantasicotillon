import React from 'react'
import {Figure} from 'react-bootstrap'
import batidor from '../../Assets/Img/batidor.png';
import './Products.css';

export default function Products() {
  return (
    <div className="container">
      <h1>productos</h1>
      <div className='prod'>
        <Figure>
          <Figure.Image width={171} height={180} alt="171x180" src={batidor} />
          <Figure.Caption>Snacks</Figure.Caption>
        </Figure>
        <Figure>
          <Figure.Image width={171} height={180} alt="171x180" src={batidor} />
          <Figure.Caption>Reposteria</Figure.Caption>
        </Figure>
        <Figure>
          <Figure.Image width={171} height={180} alt="171x180" src={batidor} />
          <Figure.Caption>descartables</Figure.Caption>
        </Figure>
        <Figure>
          <Figure.Image width={171} height={180} alt="171x180" src={batidor} />
          <Figure.Caption>Golosinas</Figure.Caption>
        </Figure>
      </div>
    </div>
  );
}
