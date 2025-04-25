import React from 'react'
import './Title.css'

const Title = ({title}) => {
  return (
    <div className='title'>
      <h1 className='text-title'>{title}</h1>
    </div>
  )
}

export default Title
