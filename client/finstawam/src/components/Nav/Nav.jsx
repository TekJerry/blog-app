import React from 'react'
import './Nav.css'
import { NavLink } from 'react-router-dom'


export default function Nav() {
    return (
        <nav>
        <div className= "nav">
            <NavLink className = "logo" to='/'>Finstawam</NavLink>
            <div className="links">
                <NavLink className="link" to="/api/posts/new">New Post</NavLink>
                
            </div>
            
        </div>
        </nav>
    )
}
