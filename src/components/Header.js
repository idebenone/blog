import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <div className='row nav center'>
            <Link className='link' to='/'>Home</Link>
            <Link className='link' to='/'><span>BLOG</span></Link>
            <Link className='link' to='/profile'>Profile</Link>
        </div>
    )
}

export default Header