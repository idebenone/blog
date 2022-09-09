import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import PostResult from './PostResults';


const Search = () => {
    const [search, setSearch] = useState()
    const [posts, setPosts] = useState()

    useEffect(() => {
        if (search) {
            axios.get(`https://mern-anime.herokuapp.com/api/search?name=${search}`)
                // .then(res => console.log(res.data.posts))
                .then(res => setPosts(res.data.posts))
                .catch(err => console.log(err))
        }
    }, [search])

    const handleClear = () => {
        setSearch('')
        setPosts()
    }

    return (
        <div className='searchCont'>
            <div >
                <form className='row searchUtils'>
                    <input className='search' type='text' placeholder='Search for articles...'
                        name='search'
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                    <div style={{ cursor: 'pointer', opacity: search ? '0.3' : '0' }} className='center' onClick={handleClear}><span style={{ fontSize: '2rem' }}>&times;</span></div>
                </form>
            </div>

            {/* search results*/}
            <div className='results col'>
                {posts && posts.map(post => (
                    <Link to={`/post/${post._id}`} key={post._id}>
                        <PostResult name={post.name} type={post.type} />
                    </Link>
                ))}
            </div>


        </div>
    )
}

export default Search