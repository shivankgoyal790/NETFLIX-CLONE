import React  from 'react'
import "./Accordian.css"


const myfunction1 = () => {
    var z=document.getElementsByClassName("divstyle");
    var y=document.getElementsByClassName("hi")
    z[0].classList.toggle("active");
    if(y[0].style.display === "none"){
        y[0].style.display ="block";
      }
    else{
        y[0].style.display ="none";
  
       }

}

const myfunction2 = () => {
    var z=document.getElementsByClassName("divstyle");
    var y=document.getElementsByClassName("hi");

    z[1].classList.toggle("active");
    if(y[1].style.display === "none"){
        y[1].style.display ="block";
        }
    else
        y[1].style.display ="none";    

}

const myfunction3 = () => {
    var z=document.getElementsByClassName("divstyle");
    var y=document.getElementsByClassName("hi")

    z[2].classList.toggle("active");
    if(y[2].style.display === "none"){
        y[2].style.display ="block";
        }
    else
        y[2].style.display ="none";    

}

const myfunction4 = () => {
    var z=document.getElementsByClassName("divstyle");
    var y=document.getElementsByClassName("hi")

    z[3].classList.toggle("active");
    if(y[3].style.display === "none"){
        y[3].style.display ="block";
        }
    else
        y[3].style.display ="none";    

}
const myfunction5 = () => {
    var z=document.getElementsByClassName("divstyle");
    var y=document.getElementsByClassName("hi")

    z[4].classList.toggle("active");
    if(y[4].style.display === "none"){
        
   
        y[4].style.display ="block";}
    else
        y[4].style.display ="none";    

}
 
  



const Accord= () =>{
return(
    <div>
        <div  className="divstyle" onClick={myfunction1}>
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
        <div  className="divstyle" onClick={myfunction2}>How much does Netflix cost?</div>
        <div className="hi">
            aksndljbasdasdsa jfbasd
        </div>
        <div  className="divstyle" onClick={myfunction3}>Where can i watch?</div>
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

        <div  className="divstyle" onClick={myfunction4}>How do i cancel?</div>
        <div className="hi">Netflix is flexible. There are no annoying contracts and no
         commitments. You can easily cancel your account online in two clicks. 
        There are no cancellation fees – start or stop your account anytime.</div>

        <div  className="divstyle" onClick={myfunction5}>What can i watch on Netflix?</div>
        <div className="hi">Netflix has an extensive library of feature films, documentaries, 
        TV shows, anime, award-winning Netflix originals, and more.
         Watch as much as you want, anytime you want.</div>
    </div>
)

}


export default Accord 