import React, { useState } from 'react'
import "./styles.css"
import { Link } from 'react-router-dom'
const Header = () => {
    const [mouse , setMouse] = useState(false)
  return (
    <div>
      <h1>Would you like to die</h1>

      <span>
        <button><a style={{textDecoration:"none", color:"white"}} href="https://www.youtube.com/watch?v=-BjZmE2gtdo">Yes</a></button>
        
       {!mouse? (<button style={{marginLeft:50}} onMouseOver={()=>{
        setMouse(!mouse)
       }} >No</button>):null}
          
      </span>
      <div style={{paddingTop:50}}>
      {mouse?(<button onMouseOver={()=>{
        setMouse(!mouse)
      }}>NO</button>):null}
      </div>
    </div>
  )
}

export default Header
