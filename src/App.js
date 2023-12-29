import React, { useState } from "react";
import { Sun, Moon } from "lucide-react"
import    "./App.css"

function App() {
  const [input,setinput]=useState("");
  const[icon,seticon]=useState(true)

  const topchange=(()=>{
    seticon(!icon)
  })
  const ontext=(e)=>{
    setinput(e.target.value)
  }
  const onupper=(()=>{
    setinput(input.toUpperCase())
  })

  const onlow=(()=>{
    setinput(input.toLowerCase())
  })

  const copytext=()=>{
    navigator.clipboard.writeText(input)
    alert("Copied to Clip Board")
  }
  const cleartext=()=>{
    setinput("")
   
  }
  const oncapi=()=>{
    let newtext = input.split(" ").map(el =>el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
    setinput(newtext)
 
  }
  


  return (
    <>
      <main className={icon?"main1":"main2"}>
        <nav className="navbar"><p className="h1">Textutils</p><button onClick={topchange} className={icon?"btn1":"btn2"} >{icon?<Sun/>:<Moon/>}{icon?"Light":"Dark"}Mode</button></nav>
   
      <textarea onChange={ontext} value={input} className={icon?"input1":"input2"}></textarea>

      <div className="buttons">
        <button className="btn" onClick={onupper}>Upper case</button>
         <button className="btn" onClick={onlow}>Lower case</button>
         <button className="btn" onClick={oncapi}>Capital letter</button>
         <button className="btn0" onClick={copytext}>Copy text</button>
         <button className="btn00" onClick={cleartext}>Clear text</button>
       
      
      </div>


      <p className={icon?"in1":"in2"} >Type something </p>

      <p className={icon?"in1":"in2"}>{input} </p>
      </main>
    </>
  );
}

export default App;
