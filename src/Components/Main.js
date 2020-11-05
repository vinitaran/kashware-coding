import React from 'react';
import "./Main.css";
import step1 from "../images/step-1.png"
import downArrow from "../images/downArrow.svg"


function Main() {
 const addAnimations=()=>{
// console.log("I am functioning")
    document.querySelector("#hero .container-wrap").style.animation="hero-container 5s linear forwards";
    document.querySelector(".card").style.animation="card-2 5s linear 3.85s, card-fan 0s forwards 8.85s";
    document.querySelector("#hero .hero-bg").style.animation="hero-bg 5s linear forwards";
    document.querySelector(".card-title").style.animation="cardContent 0s forwards 8.85s";
  }
    return (
        <section id="hero">

          <div className="cards">
            <li className="card">
            </li>
            <h1 className="card-title">One App. One Card.<span className="card-catcher">For all others.</span> </h1>
          </div>

        <img className="hero-bg" src={step1} alt="" />
        <div className="container-wrap">
          <h1 className="hero__title">
            Kashware is an exclusive ecosystem that unites your money.
          </h1>
          <h3 className="hero__hashtags">#Spend #Save #StaySecured #EarnRewards #JoinTheKlub</h3>
          {/* <a href="" className="hero__btn"> */}
            <img src={downArrow} alt="try it now" onClick={()=>{
              addAnimations()
            }}/>
          {/* </a> */}
        </div>

        
    
        
    
      </section>
    )
}

export default Main
