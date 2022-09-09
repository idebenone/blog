import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Available = () => {
    const [all, setAll] = useState()
    const [alph, setAplh] = useState('')

    const handleAll = () => {
        setAplh('')
    }

    const handleEntertainment = () => {
        setAplh('E')
    }
    const handleCommunity = () => {
        setAplh('C')
    }
    const handleTech = () => {
        setAplh('T')
    }

    useEffect(() => {
        axios.get('https://mern-anime.herokuapp.com/api/all')
            .then(res => setAll(res.data.posts))
            .then(err => console.log(err))
    }, [])
    return (
        <div>
            <div className='available'>
                <h2>Available Articels</h2>
                <div className='sortBtn'>
                    <button onClick={handleAll}>All</button>
                    <button onClick={handleEntertainment}>Entertainment</button>
                    <button onClick={handleCommunity}>Community</button>
                    <button onClick={handleTech}>Tech</button>
                </div>
                <div className='articles col'>
                    {all && all.filter(post => post.type.includes(alph)).map((res, i) => (
                        <Link key={i} to={`post/${res._id}`}>
                            <span style={{ color: 'black' }}>{res.name}</span>
                        </Link>
                    ))}
                </div>
            </div>

            {/* <div className='parallexImg'></div> */}
        </div>
    )
}

export default Available