import React from 'react'
import './header.css'

import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div id='home' className="gpt3__header section__padding">
      <div className="gpt3__header-content">
        <h1 className='gradient__text'>A.I is taking over the world, make your life amazing with it</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio autem, molestias sit neque voluptates minus eaque facere excepturi quos impedit?</p>
        <div className="gpt3__header-content__input">
          <input 
            type="email"
            placeholder='Your Email' 
          />
          <button type='button'>Get started</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1500+ people have requested for access in the last 24hrs</p>
        </div>
      </div>

      <div className='gpt3__header-image'>
          <img src={ai} alt="ai" />
        </div>
    </div>
  )
}

export default Header