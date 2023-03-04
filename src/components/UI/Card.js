import React from 'react'

const Card = (props) => {
  return (
    <div className='bg-blue-300 rounded-lg border-solid border-black px-4 py-2 mt-6 w-2/3 mx-auto'>{props.children}</div>
  )
}

export default Card