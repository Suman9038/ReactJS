import React from 'react'

const App = () => {
  // localStorage.clear()
  // localStorage.setItem("user","Suman")
  // console.log(localStorage.getItem("user"));
  let user = {
    username: "React",
    age:18,
    city:"Delhi"
  }

  localStorage.setItem("user",JSON.stringify(user))
  console.log(JSON.parse(localStorage.getItem(("user"))))
  
  return (
    <div>App</div>
  )
}

export default App