import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id = "right-content" className='h-full w-2/3 p-6 flex flex-nowrap gap-10 overflow-x-auto rounded-4xl '>
       {props.users.map((user, index)=>{
        return <RightCard user={user} key={index} id={index}/>
       })}
    </div>
  )
}

export default RightContent