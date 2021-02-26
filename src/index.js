//Create a react app from scratch.
import React from "react";
import ReactDom from "react-dom";

const ask = "Ask a question";
const dice = 0 ;
const num = Math.floor((Math.random(dice) * 6) + 1);

let in_depth;

if (num == 1) {
   fortune = "Simple Answer is No. The Keyword is: Evaluate.";
   in_depth = "This roll indicates deceptive forces at work undermining your security. How secure do you feel in yourself. Attempt nothing major in your life untile the next New Moon";
} 
  else if (num == 2) {
    fortune = "Simple Answer is Yes. The Keyword is: Adventure.";
    in_depth = "You are now entering a lucky period. Unexpected good news, gifts and compliments will come your way. A possible win of money! Travel is indicated and plans connected with travel should go well. Business partnerships are positive. Broaden your horizon. Meditate";
  }
   else if (num == 3) {
     fortune = "Simple Answer is No. The Keyword is: Conflict.";
     in_depth ="Caution is advisable now. A nerve racking period is about to begin. Keep your wits about you. Change is coming and your life direction is changing. Quarrels and discord. Need to act diplomatic.";
   }
    else if (num == 4) {
     fortune = "Simple Answer is Yes. The Keyword is: Answer all letters.";
     in_depth = "Attend to any phone calls and communications. Get in touch with others. Someone or something new is coming and it will affect your thinking. Love affair is indicated.";
   }
   else if ( num == 5) {
       fortune = "Simple Answer is No. The Keyword is: Security. ";
       in_depth = "Your foundations are going to be threated in someway. If you feel any doublts please rectify them NOW. Major decisions are indicated in the near future throw the dice again for clarification.";
   } else {
       num == 6;
       fortune = "Simple Answer is No. The Keyword is: Cooperation.";
       in_depth = "Others will need your help, be prepared and be available to help. Hospital, medical centers and doctors are all indicated in the future.  Look after your own health. Take care of yourself both physically and spiritually."
   }
     

//Template literal
ReactDom.render(
<div>
    <h1>Simple Dice Divination</h1>
    <p>
     The dice are great if you need an answer quickly, just one
     rool and there you have it.
     <br/>
     Take the dice in your left-hand, shake it as long as you feel the need
      (concentrating on your question) then 'throw'it onto the floor, a table, or
      any flat surfice. The Answer to your your question is given below.
      <br/>
      For Simple Yes or No question, throw the dice.
      If the number is even it is a yes and an odd number is a no.
    </p>
    <br/>

     <p>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTozFeyWZ0w0PcGKhP98sb2iOFndGFq1A6g3g&usqp=CAU" /> 
     </p>
     
       <h3> Fate number is </h3>
       <h4>{num}</h4>
        <br/>
      <h4>{fortune}</h4>
       <br/>
      <h4> {in_depth} </h4>


</div>,
document.getElementById("root")
);