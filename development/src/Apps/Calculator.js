import React from 'react'
import "./calculator.css"

const Calculator = () =>{
    return(

        <div>
                <div className="container">
                    <input type="text" value="0" className="inpt"></input>
                    <br/>
                    <div>
                        <button className="btn">M</button>
                        <button className="btn">M</button>
                        <button className="btn">M</button>
                        <button className="btn">M</button>
                        <button className="btn">M</button>
                    </div>
                </div>
        </div>
    )
}   


export default Calculator