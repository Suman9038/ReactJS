import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {
  const [data, setData] = useState([])

  let getData = async() =>{
    // // console.log("Data Aaa gaya mujhe");
    // let res = await fetch('https://jsonplaceholder.typicode.com/todos') // Async await isliya use kiya q ki mujhe promise milra tha jo ki resolve nahi hua tha toh woo log wala paart pahle chal gaya data milna se pahle hi 
    // // console.log(res)
    // let data = await res.json() // Ye v asynchronously kaam kar raha hai toh ye v await krna pada
    // console.log(data)


    // USING AXIOS
    // let res = await axios.get("https://jsonplaceholder.typicode.com/todos/1")
    // console.log(res.data)

    let res = await axios.get("https://picsum.photos/v2/list")
    // console.log(res.data);
    setData(res.data)


  }

  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map((item, index)=>{
          return <div key={index}>
            {index} {item.author}
          </div>
        })}
      </div>
    </div>
  )
}

export default App