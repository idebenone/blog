import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <div className='row nav center'>
            <Link className='link' to='/blog'>Home</Link>
            <Link className='link' to='/blog'><span>BLOG</span></Link>
            <Link className='link' to='/blog/profile'>Profile</Link>
        </div>
    )
}

export default Header