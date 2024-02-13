import React, { useEffect, useState } from 'react'

const TestUseEffetc = () => {
    const [varr, fuctionn]=useState(0)
    useEffect(
        ()=>{
            console.log("this is useEffect")
        },[varr]


    )
  return (
    <>
    <h3>{varr}</h3>
    <button onClick={()=>fuctionn(varr+1)}>Click</button>
    </>
  )
}

export default TestUseEffetc