import './Footer.css';

import React from 'react';

import Slide from 'react-reveal/Slide';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import ReactPlayer from 'react-player'


function Footer() {
    return (
        <div>
         <Card style={{ width: '18rem' }}>
         <ReactPlayer url='https://www.youtube.com/watch?v=4Zne-5V30xg' />
  <Card.Body>
    <Card.Title>Over 500 Free Workout</Card.Title>
    <Button variant="primary">Subscribe</Button>
  </Card.Body>
</Card>


             {/*base */}
             <div className="base">
                 <li className="text"><h2>Copyright - Lean</h2></li>
             </div>
        </div>
    )
}

export default Footer;
