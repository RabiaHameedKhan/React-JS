import React from "react";
import ReactDom from "react-dom";


const fname="Rabia";
const lname= "Khan";
ReactDom.render(

// react Fragment and template literals
<>
<h1>Hello World </h1>
<h4>{`I am ${fname} ${lname}`}</h4> 
<h4>My Age is {20+1}</h4>
<p>This is my day 3 of learning React Js</p>
</>,

 document.getElementById("root"));