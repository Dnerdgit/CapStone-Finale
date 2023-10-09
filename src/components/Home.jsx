import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <Link to='/account/create'>
      <div className="home-image">
        <img 
          src='/ECommerce photos/red-enter-neon-signage-nshqdl22v2xtewcp.jpg'
          className='homescreen'
          />
      </div>
    </Link>
  )
}

export default Home