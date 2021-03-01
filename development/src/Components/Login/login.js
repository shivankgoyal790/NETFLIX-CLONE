import React from 'react'
import "./login.css"
import logo from 'G:/react_practice/development/src/Components/images/netflix1.jpg'
import logo1 from 'G:/react_practice/development/src/Components/images/netflix2.png'
/*import logo from 'G:/react_practice/development/src/Components/images/t1.jpg'*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF} from '@fortawesome/free-brands-svg-icons'
/*import { faGoogle} from '@fortawesome/free-brands-svg-icons'
import { faGithub} from '@fortawesome/free-brands-svg-icons'
import { faTelegram} from '@fortawesome/free-brands-svg-icons'*/

const myfunction= ()=>
{
 var x= document.getElementsByClassName("inpt5");
 var y= document.getElementsByClassName("alert1");
 var z= document.getElementsByClassName("alert2");
  y[0].style.display = "none";
  z[0].style.display ="none"


  if(x[0].value === ""){
    y[0].style.display = "block";

  }
  if(x[1].value.length < 8)
  {
      z[0].style.display ="block";  
 }
}






const Login = () => {
return(
    <div>
        <div className="modal">
            <img src={logo} alt="hi" className="imager" />
             <div className="container3"> 
                <img src={logo1} alt="hi" className="imager3"></img> 
            </div>
            <div className="container2"> 
        
            <div className="inside">
            <h2 className="line4">Sign In</h2>
            <input type="text" placeholder="Email or phone number " className="inpt5" onKeyPress={myfunction}/><br/><br/>
            <p className="alert1">Please enter a valid email or phone number</p>
            <input type="password" placeholder="Password" className="inpt5" onKeyPress={myfunction} />
        
            <p className="alert2">Your password must contain between 4 and 60 characters.</p>
            <br />
            <br />
            <br/>
            <button className="btn6">Sign In</button>&emsp;
            <br /><br/>
            <div className="line6">
            <input type="checkbox"  /><span className="remember">Remember Me</span>
            <span className="help">Need help?</span>
            </div>
            <br/><br/>
            <button className="facebookbtn"><FontAwesomeIcon icon={faFacebookF} className="icon"/> Login with facebook</button>
            <br /><br/>
            <div className="margin">
            <span className="new">
                New to netflix?
            </span>
            <span className="sign">Sign up now</span> 
            </div>
            <div className="new2">
                <span >This page is protected by Google reCAPTCHA to ensure you're not a bot.<a href="123">Learn more.</a></span>
            </div>
            </div>
           
           
        </div>
        </div>
        
    </div>
)
}

export default Login    