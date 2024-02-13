import React, { useState } from 'react'

const TestUseState = () => {
    const [Test, Funcc]=useState(0)
  return (
    // <div>UseState</div>
    <>
    <h1>{Test}</h1>
    <button onClick={()=>Funcc(Test+1)}>Click</button>
    </>
  )
}

export default TestUseState