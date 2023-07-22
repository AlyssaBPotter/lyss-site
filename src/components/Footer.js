import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='app-footer'> 
      <hr/>
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

export default Footer