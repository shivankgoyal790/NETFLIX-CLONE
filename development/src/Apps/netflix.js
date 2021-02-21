import React from 'react'
import logo from 'G:/react_practice/development/src/Components/images/netflix1.jpg'
import logo1 from 'G:/react_practice/development/src/Components/images/netflix2.png'
import "./netflix.css"
import logo3 from 'G:/react_practice/development/src/Components/images/netflix3.png'
import logo2 from 'G:/react_practice/development/src/Components/images/netflix4.jpg'
import logo4 from 'G:/react_practice/development/src/Components/images/netflix5.jpg'
import Accord from 'G:/react_practice/development/src/Components/Accordian/Accordian'


const Netflix = () =>{
    return(
        <div>
        <div className="container">
            <img src={logo} alt="hihcvhv" className="imager"></img>
            <div className="container-content">
                <div className="contains">
                    <img src={logo1} alt="hi" className="imager1"></img> 
                    
                   
                </div>

                <div className="center">
                    <h1>Unlimited movies, TV</h1>
                    <h1>shows and more.</h1>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                    <h4>Ready to watch? Enter your email to create or restart your membership.</h4>
                        <div className="input-container"><input className="inpt" placeholder="Email address"></input>
                        <button className="btn2">Get Started </button></div>
                </div>
            </div>
        </div>
            <br />
        <div className="next-contain">
            <div className="content">
                    <div className="myborder2" />
                   
                    <div className="flex-container">
                        <div className="divx">
                        <h1>Enjoy on your TV.</h1>
                        <p className="line2">
                        Watch on smart TVs, PlayStation, Xbox,
                        Chromecast, Apple TV, Blu-ray players and more.
                        </p>
                        </div>
                        <div className="div2">
                            <img src={logo3} alt="h1" className="imagex"/>
                        </div>
                    </div>    
                   
                   
                    <div className="myborder2" />
                   <div className="flex-container">
                    <div className="div2">
                        <img src={logo2} alt="h1" className="imagex"/>
                    </div>

                    <div className="div1">
                            <h1>Download your shows</h1>
                            <h1>to watch offline.</h1>
                            <p className="line2">Save your favourites easily and always have
                            something to watch.</p>
                        

                    </div>
                </div>
                    <div className="myborder2" />
                    <div className="flex-container">
                    <div className="divx">
                        
                            <h1>Enjoy on your TV.</h1>
                            <p className="line2">Watch on smart TVs, PlayStation, Xbox,
                            Chromecast, Apple TV, Blu-ray players and
                            more.
                            </p>
                        

                    </div>
                    <div className="div2">
                        <img src={logo4} alt="h1" className="imagex"/>
                    </div>

                    </div>
                    <div className="myborder2" />

                    <div >
                        <h1 className="div3">Frequently Asked Questions</h1>
                        {<Accord />}
                    </div>





                    
            </div>
        </div>
        </div>
        
        )
}

export default Netflix