import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Flash from 'react-reveal/Flash';
import Slide from 'react-reveal/Slide';


function Signup() {
    return (
        <div> 
             
         <Flash>   <form>
                <h3>Sign Up</h3>

             <Slide left>   <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div></Slide>

               <Slide right> <div className="form-group">
                    <label>birthdate</label>
                    <input type="text" className="form-control" placeholder="Enter birthdate" />
                </div></Slide>

             <Slide left>   <div className="form-group">
                    <label>Gender</label>
                    <input type="email" className="form-control" placeholder="Enter Gender" />
                </div></Slide>

             <Slide right>   <div className="form-group">
                    <label>Address</label>
                    <input type="password" className="form-control" placeholder="Enter Address" />
                </div></Slide>

             <Slide left>   <div className="form-group">
                    <label>Email</label>
                    <input type="password" className="form-control" placeholder="Enter email" />
                </div></Slide>

               

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form></Flash>
         
       
        </div>
          
    )
}

export default Signup;
