import React, { useState } from 'react'
const quites = [
    "in the jungle",
    "we,re no stranger to love",
    "we could all use little change"
]
function Quites() {
    const [counter,setCounter] = useState(2)
    return (
      
        <div
            className='qutes'
        onClick={(event) =>setCounter(counter + 1)}>
            {quites[counter % quites.length]}
      
    </div>
  )
}

export default Quites
