import React from 'react'
import CopyEmail from '../utils/CopyEmail'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div className='app-header'>
      <div className='app-title'>
        <h1>Alyssa Potter Writing</h1>
      </div>        
      <nav>
        <ul className='header-options'>
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
        <ul className="header-social">
        <li>
          <a href="https://twitter.com/lyssp_writes" className="fa fa-twitter socbar" target="_blank" rel="noopener noreferrer">Twitter</a>
        </li>
        <li>
          <a href="https://www.instagram.com/alyssa_writes_things/" className="fa fa-instagram socbar" target="_blank" rel="noopener noreferrer">Insta</a>
        </li>
        <li>
          <a onClick={CopyEmail} className="fa fa-envelope socbar" target="_blank" rel="noopener noreferrer">Email</a>
        </li>
        <li>
          <a href="https://www.wattpad.com/user/Lyss_Potter20" className="fa wattpad socbar" target="_blank" rel="noopener noreferrer">
            <img src="./assets/icons/wattpad-transparent.png" alt="Wattpad Icon" />
          </a>
        </li>
      </ul>
      </nav>
    </div>
    
  )
}

export default Header