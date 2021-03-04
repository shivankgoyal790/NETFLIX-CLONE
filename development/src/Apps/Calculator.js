import React from 'react'
import "./calculator.css"
import logo from "G:/react_practice/development/src/Components/images/images.png"
var y;
var z;
var x;

class Calculator extends React.Component {
    
    shoot = (a) => {

        if(a==="C" || a==="CE")
        {
            document.getElementById("inpt").value = "";
            document.getElementById("inpt").placeholder = 0;
        }
        else if(a !== "+" && a !== "=" && a !== "-"){
        document.getElementById("inpt").value += a;
        y =  document.getElementById("inpt").value;
        }
        else if(a === "+" || a === "-")
        {
            x = a;
            document.getElementById("inpt").value = "";
            document.getElementById("inpt").placeholder = y;
            z = y;
            y= "";
            
        }


        else if(a === "="){
            if(x === "+")
            document.getElementById("inpt").value = Number(y)+ Number(z);
            if(x === "-")
            document.getElementById("inpt").value = Number(z)- Number(y);
            y="";
            z="";

        }

      

    }
   render(){

    return(

        <div>
                <div className="container">
                    
                    <img src={logo} alt="hi" className="images"></img>
                    <input type="text" id="inpt" value="&#x00A;" placeholder="0"></input>
                    <br/><br/>
                    <div className="flex-container">
                        <div className="btn">M</div>&emsp;
                        <div className="btn" onClick = {() => this.shoot("CE")}>CE</div>
                        <div className="btn" onClick = {() => this.shoot("C")}>C</div>
                        <div className="btn">X</div>
                        <div className="btn"> &#xf7;</div>
                        
                        
                        
                    </div>
                    
                    <div className="flex-container">
                        <div className="btn">M</div>&emsp;
                        <div className="btn" onClick = {() => this.shoot("7")} >7 </div>
                        <div className="btn" onClick = {() => this.shoot("8")}>8</div>
                        <div className="btn" onClick = {() => this.shoot("9")}>9</div>
                        <div className="btn">x</div>
                        <br/>
                        
                        
                    </div>

                         
                    <div className="flex-container">
                        <div className="btn">&radic;</div>&emsp;
                        <div className="btn" onClick = {() => this.shoot("4")}>4</div>
                        <div className="btn" onClick = {() => this.shoot("5")}>5</div>
                        <div className="btn" onClick = {() => this.shoot("6")}>6</div>
                        <div className="btn" onClick = {() => this.shoot("-")}>-</div>
                        <br/>
                        
                        
                    </div>

                         
                    <div className="flex-container">
                        <div className="btn">%</div>&emsp;
                        <div className="btn" onClick = {() => this.shoot("1")}>1</div>
                        <div className="btn" onClick = {() => this.shoot("2")}>2</div>
                        <div className="btn" onClick = {() => this.shoot("3")}>3</div>
                        <div className="btn" onClick = {() => this.shoot("+")}>+</div>
                        <br/>
                        
                        
                    </div>

                    <div className="flex-container">
                        <div className="btn">1/x</div>&emsp;
                        <div className="btn" onClick = {() => this.shoot("0")}>0</div>
                        <div className="btn" onClick = {() => this.shoot("00")}>00</div>
                        <div className="btn" onClick = {() => this.shoot(".")}>.</div>
                        <div className="btn1"  onClick = {() => this.shoot("=")}>=</div>
                        <br/>
                        
                        
                    </div>
                    
                    
                </div>
        </div>

    
    );

    
    }

}   


export default Calculator