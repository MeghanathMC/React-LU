import { useState } from "react";
export default function Home(){

let [name,setName]=useState("max");

    function printSomething(){
        setName("meghanath");
    }
    return(
        <div className="home" onMouseEnter={()=>{
            console.log("mouse entered")
        }} onMouseLeave={()=>{
            console.log("mouse left")
        }}>
            <h2>Home page  {name}</h2>
        <button onClick={printSomething}>Click</button>
        </div>
        
        
    )

}