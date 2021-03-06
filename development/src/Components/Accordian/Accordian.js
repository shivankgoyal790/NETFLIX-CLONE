import React  from 'react'
import "./Accordian.css"


 
  



class Accord extends React.Component{
    
    myfunction1 = (a) => {
        var z=document.getElementsByClassName("divstyle");
        var y=document.getElementsByClassName("hi")
        var x = Number(a); 
        z[x].classList.toggle("active");
        if(y[x].style.display === "none"){
            
       
            y[x].style.display ="block";}
        else
            y[x].style.display ="none";    
    


    }
    
    
    render(){
    return(
    <div>
        <div  className="divstyle" onClick = {() => this.myfunction1("0")}>
            What is Netflix?
        </div>
        <div className="hi">
        Netflix is a streaming service that offers a wide variety of 
        award-winning TV shows, movies, anime, documentaries and
         more – on thousands of internet-connected devices.

        You can watch as much as you want, whenever you want,
         without a single ad – all for one low monthly price. There's
          always something new to discover, and new TV shows and 
          movies are added every week!
        </div>
        <div  className="divstyle" onClick = {() => this.myfunction1("1")}>How much does Netflix cost?</div>
        <div className="hi">
            aksndljbasdasdsa jfbasd
        </div>
        <div  className="divstyle" onClick = {() => this.myfunction1("2")}>Where can i watch?</div>
        <div className="hi"><p>Watch anywhere, anytime, on an unlimited number of devices. 
        Sign in with your Netflix account to watch instantly on the web at 
        netflix.com from your personal computer or on any internet-
        connected device that offers the Netflix app, including smart TVs, 
        smartphones, tablets, streaming media players and game consoles.</p>
        <p>
        You can also download your favourite shows with the iOS,
         Android, or Windows 10 app. Use downloads to watch while
          you're on the go and without an internet connection. Take Netflix 
          with you anywhere.
          </p>
          </div>

        <div  className="divstyle" onClick = {() => this.myfunction1("3")}>How do i cancel?</div>
        <div className="hi">Netflix is flexible. There are no annoying contracts and no
         commitments. You can easily cancel your account online in two clicks. 
        There are no cancellation fees – start or stop your account anytime.</div>

        <div  className="divstyle" onClick = {() => this.myfunction1("4")}>What can i watch on Netflix?</div>
        <div className="hi">Netflix has an extensive library of feature films, documentaries, 
        TV shows, anime, award-winning Netflix originals, and more.
         Watch as much as you want, anytime you want.</div>
    </div>
)}

}


export default Accord 