import React from 'react'
import './PageNotFound.css'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'
import Title from '../Title/Title'

const PageNotFound = () => {

    const text = assets.PageNotFound;

  return (
    <div className='PageNotFound'>
        <Title title={text} />
        <Link to={"/"}><button>Go Back</button></Link>
    </div>
  )
}

export default PageNotFound
