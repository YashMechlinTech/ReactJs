import React from 'react'
import { useParams } from 'react-router-dom'

function User() {

  const {userid}=useParams()
  return (
    <div>
      <h1 className='bg-gray-600 text-white text-3xl p-4'   style={{textAlign:'center', justifyContent:'center'}}><b>User</b>: {userid}</h1>
    </div>
  )
}

export default User
