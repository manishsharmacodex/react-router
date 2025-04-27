import React from 'react'
import './PageNotFound.css'
import { Link, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import Title from '../Title/Title'

const PageNotFound = () => {

    const text = assets.PageNotFound;
    const navigate = useNavigate();

  return (
    <div className='PageNotFound'>
        <Title title={text} />
        <button onClick={()=>navigate("/")}>Go To Homepage</button>
    </div>
  )
}

export default PageNotFound
