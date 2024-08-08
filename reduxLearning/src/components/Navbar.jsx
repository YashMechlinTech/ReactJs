import React, { useCallback } from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const count=useSelector((state)=>state.counter.value)
  return (
    <div>
      The current counter is at {count}
    </div>
  )
}

export default Navbar
