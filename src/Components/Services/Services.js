import React from "react";
import {Card,Button} from 'react-bootstrap';
import "./Services.css";
import Shop from '../../Assets/Img/moto.png';
import pago from '../../Assets/Img/pago.png';
import phone from '../../Assets/Img/phone.png';

export default function Services() {
  return (
    <>
      <div className="serv container">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={Shop} className="card-img fluid" />
          <Card.Body>
            <Card.Title>Envios a domicilio</Card.Title>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={pago} className="card-img fluid" />
          <Card.Body>
            <Card.Title>Formas de pago</Card.Title>

          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={phone} className="card-img fluid" />
          <Card.Body>
            <Card.Title>Atención telefónica</Card.Title>
            
            <Button variant="primary">ver más</Button>
          </Card.Body>
        </Card>

        
      </div>
    </>
  );
}
