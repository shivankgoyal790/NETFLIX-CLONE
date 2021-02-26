import React from 'react'
import "./login.css"
import logo from 'G:/react_practice/development/src/Components/images/t1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF} from '@fortawesome/free-brands-svg-icons'
import { faGoogle} from '@fortawesome/free-brands-svg-icons'
import { faGithub} from '@fortawesome/free-brands-svg-icons'
import { faTelegram} from '@fortawesome/free-brands-svg-icons'

const myfunction= ()=>
{
 var x= document.getElementsByClassName("inpt");
 var y= document.getElementsByClassName("alert1");
  for(var i=0;i<3;i++)
  {
      y[i].style.display = "none";
  }
  if(x[0].value === "")
    y[0].style.display = "block";
  if(x[1].value.length === 0)
  y[1].style.display = "block";
  if(x[1].value.length < 8 && x[1].value.length > 0)
  {
      y[2].style.display ="block";  
        y[1].style.display ="none"
 }
}


const myfunction2 = () =>{

    var x= document.getElementsByClassName("inpt");
    for(var i=0;i<2;i++){
        x[i].value = "";
    }
}





const Login = () => {
return(
    <div>
        <div className="modal">
            <img src={logo} alt="hi" />
            
        <div className="container2"> 
            <h2>LOGIN FORM</h2>
            <p>Enter Name
            </p>
            <input type="text" placeholder="Enter your name" className="inpt5" />
            <p className="alert1">*Field empty</p>
            <p>Enter Password</p>
            <input type="password" placeholder="Enter your password" className="inpt5" /><br />
            <p className="alert1">*Field empty</p>
            <p className="alert1">*Minimum 8 characters</p>
            <input type="checkbox" />Remember Me
            <br />
            <br />
            <button className="btn" onClick={myfunction}>SUBMIT</button>&emsp;
            <button className="btn" onClick={myfunction2}>RESET</button>
            <br /><br />
            <div>
                <span className="icons"><FontAwesomeIcon icon={faFacebookF}/></span>
                <span className="icons"><FontAwesomeIcon icon={faGoogle}/> </span>
                <span className="icons"><FontAwesomeIcon icon={faTelegram}/></span>
                <span className="icons"><FontAwesomeIcon icon={faGithub}/></span>
            </div>
           
        </div>
        </div>
        
    </div>
)
}

export default Login    