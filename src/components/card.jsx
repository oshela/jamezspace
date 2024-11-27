import React from 'react'

const Card = ({children}) => {
  return (
    <div className='bg-gray-100 rounded-lg p-2 md:p-4 m-2'>
        {children}
    </div>
  )
}

export default Card