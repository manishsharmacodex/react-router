import React from 'react'
import './Home.css'
import Title from '../../Title/Title'

const Home = () => {

    const heading = "Home Page";

  return (
    <div className='home'>
        <Title title={heading} />
    </div>
  )
}

export default Home
