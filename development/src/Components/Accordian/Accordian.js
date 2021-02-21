import React  from 'react'
import "./Accordian.css"

const myfunction = ()  =>{
    
    var z=document.getElementsByClassName('divstyle');
    var i;
    for(i=0;i < z.length; i++){

        z[i].classList.toggle("active");
        var y=z[i].nextElementSibling;
        if(y.style.display === "none")
            y.style.display = "block";
        else
            y.style.display ="none";

    }

}
 
  



const Accord= () =>{
return(
    <div>
        <div  className="divstyle" onClick={myfunction}>
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
        <div  className="divstyle" onClick={myfunction}>How much does Netflix cost?</div>
        <div className="hi">
            aksndljbasdasdsa jfbasd
        </div>
        <div  className="divstyle" onClick={myfunction}>Where can i watch?</div>
        <div className="hi">jab skjdbakjsfbjak sbdklas</div>
    </div>
)

}


export default Accord 