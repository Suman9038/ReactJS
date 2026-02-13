import React from 'react'
import { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Button = () => {
    let [theme,setTheme] = useContext(ThemeDataContext)
  return (
    <div>
        <button onClick={()=>{
            console.log("change theme")
            setTheme("dark")
        }}>Change Theme {theme}</button>
    </div>
  )
}

export default Button