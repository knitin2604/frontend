import './Content.css';


import React from 'react'

import lean1 from '../images/lean1.jpg';
import lean2 from '../images/lean2.jpg';
import product from '../images/product.png';
import service from '../images/service.png';
import tech from '../images/tech.png';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import Slide from 'react-reveal/Slide';
import Flip from 'react-reveal/Flip';





function Content() {
    return (
        <div>

            {/*content1 */}
            <div className="content1">
             <ul className="content1-text">
           <Zoom>    <li style={{fontSize:"48px",fontWeight:"bold",fontStyle:"normal"}}>Do you want daily workouts that you can do at home for Free <br/><span style={{color:"#EE4248"}}></span></li>
                 <li className="content12-text">Every Sunday&nbsp;I send out a NEW timetable for the week to the #LeanwithLilly familia!</li></Zoom>
              <Flip> <li><button className="card1button" >Read More</button></li> </Flip>
             </ul>
            
             <ul className="content1-img">
                <li>
              <Fade left><img className="lean-img1" src={lean1}/></Fade>
                </li>

            </ul>

            </div>
        {/*content 2 */}


            <div className="content2">


            <ul className="content2-img">
                 <li>
                 <Fade right>  <img className="lean-img2" src={lean2}/></Fade>  
                 </li>
             </ul>
             <ul className="content2-text">
        <Slide right>  <li className="content22-header"> <span style={{color:"#EE4248"}}>Oh Hello  There!  <br/></span></li></Slide>
         <Zoom>  <li className="content22-text">I’m Lilly Sabri, and i've been&nbsp;a Chartered Physiotherapist since 2010, APPI Pilates instructor, Fitness, Heath and Lifestyle Influencer. <br/>

         As a physio I've worked with Chelsea Football Club, Watford Football Club, the England Women's Football Team and many more.<br/>
         I've now taken my years of physio experience and poured it into my guides and&nbsp;workout videos so that YOU can take the steps towards&nbsp;a healthier lifestyle.
         </li> </Zoom>
             </ul>
             
            </div>


            {/*content3 */}

            <div className="content-3">
             <div className="content3-header">
                 <li><span>Product and Service</span></li>
             </div>


             <div className="content3-cards">
            <Zoom>  <div classname="card1">
                
              <div><img src={product}/></div>
              <div ><h1 style={{color:"#EE4248"}}>Get My Cookbook</h1></div>
             
              <h2 > From fighting the dreaded bloat and <br/> inflamed skin/acne, to healing<br/> your gut and injuries, decreasing<br/> inflammation and boosting your <br/>immune system are absolutely key.</h2>
              <div><Flip><button className="card1button">Read More</button></Flip></div>
            </div> </Zoom>
            <Fade>
            <div classname="card2">
              <li><img src={service}/></li>
              <li><h1 style={{color:"#EE4248"}}>Shop Resistance Bands</h1></li>
            
              <li><h2>Our Resistance Bands <br/>  Level up your LEAN,<br/> workouts with our resistance<br/> band range!</h2></li>
              <li><Flip><button className="card1button" >Read More</button></Flip></li>
            </div> </Fade>
             
            <Fade right>
            <div classname="card3">
              <li><img src={tech}/></li>
              <li><h1 style={{color:"#EE4248"}}>Shop Gymshark </h1></li>
             
              <li><h2> Get all the latest women's Gymshark releases<br/> in one place. Be a visionary<br/> and stay up to date with the<br/> most recent additions to our collections of<br/> technical and stylish gym clothing.</h2></li>
              <li><Flip><button className="card1button">Read More</button></Flip></li>
            </div></Fade>
        </div>
             

            </div>





            
        </div>
    )
}

export default Content;
