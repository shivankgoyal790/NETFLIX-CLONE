import React from 'react'
import "./calculator.css"
import logo from "G:/react_practice/development/src/Components/images/images.png"
const myfunction5 = () =>{

    var x=document.getElementById("inpt");
    if(x[0].Value === "")
        x[0].Value += 7;

}

const Calculator = () =>{
    return(

        <div>
                <div className="container">
                    
                    <img src={logo} alt="hi" className="images"></img>
                    <input type="text" placeholder="0"  id="inpt"></input>
                    <br/><br/>
                    <div className="flex-container">
                        <div className="btn">M</div>&emsp;
                        <div className="btn">CE</div>
                        <div className="btn">C</div>
                        <div className="btn">X</div>
                        <div className="btn"> &#xf7;</div>
                        
                        
                        
                    </div>
                    
                    <div className="flex-container">
                        <div className="btn">M</div>&emsp;
                        <div className="btn" onclick={myfunction5}>7</div>
                        <div className="btn">8</div>
                        <div className="btn">9</div>
                        <div className="btn">x</div>
                        <br/>
                        
                        
                    </div>

                         
                    <div className="flex-container">
                        <div className="btn">&radic;</div>&emsp;
                        <div className="btn">4</div>
                        <div className="btn">5</div>
                        <div className="btn">6</div>
                        <div className="btn">-</div>
                        <br/>
                        
                        
                    </div>

                         
                    <div className="flex-container">
                        <div className="btn">%</div>&emsp;
                        <div className="btn">1</div>
                        <div className="btn">2</div>
                        <div className="btn">3</div>
                        <div className="btn">+</div>
                        <br/>
                        
                        
                    </div>

                    <div className="flex-container">
                        <div className="btn">1/x</div>&emsp;
                        <div className="btn">0</div>
                        <div className="btn">0</div>
                        <div className="btn">.</div>
                        <div className="btn1">=</div>
                        <br/>
                        
                        
                    </div>
                    
                    
                </div>
        </div>
    )
}   


export default Calculator