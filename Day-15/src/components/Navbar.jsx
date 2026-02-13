import React from 'react'

const Navbar = (props) => {
    console.log(props)
  return (
    
    <div>
        {/* <p>Theme is {props.theme}</p> */}
        <button onClick={()=>{
            props.setTheme("Dark")
            console.log(props.theme)
        }}>Change Theme</button>
    </div>
  )
}

export default Navbar