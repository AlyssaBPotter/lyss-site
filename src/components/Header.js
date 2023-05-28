import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='app-header'>
      <div className='app-title'>
        <h1>Alyssa Potter Writing</h1>
      </div>        
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>      
          </li>
          <li>
            <Link to="/books">Books</Link>    
          </li>
          <li>
            <Link to="/upcoming">Upcoming</Link>            
          </li>
        </ul>  
      </nav>
    </div>
    
  )
}

export default Header