import React from 'react'
import cheetah from '../assets/cheetah.mp4'

const main = () => {
  return (
    <div className='main'>
        <video src={cheetah} autoPlay loop/>
        <div className='content'>
            <h1>Path Finder</h1>
            <p>Job Title:</p>
            <input></input>
        </div>
    </div>
  )
}

export default main