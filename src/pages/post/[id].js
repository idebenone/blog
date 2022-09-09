import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Available from '../../components/Available'
import Search from '../../components/Search'

const PostID = () => {
    const { id } = useParams()
    const history = useNavigate()

    const [data, setData] = useState()

    useEffect(() => {
        axios.get(`https://mern-anime.herokuapp.com/api/post/${id}`)
            // .then(res => console.log(res.data.post))
            .then(res => setData(res.data.post))
            .then(err => console.log(err))
    }, [id])


    const handleBack = () => {
        history(-1)
    }
    return (
        <div className='triplex row'>
            <div className='sticky'>
                <Available />
            </div>
            <div className='dividerH'></div>
            <div className='postCont col' style={{ alignItems: 'flex-start' }}>
                <button className='back' onClick={handleBack}>Back</button>
                {data ? (
                    <div className='postCard col'>
                        <h1 className='name'>{data.name}</h1>
                        <div className='type' style={{ backgroundColor: data.type === 'Tech' ? 'green' : data.type === 'Entertainment' ? 'black' : 'red' }}>
                            <span>
                                {data.type}
                            </span>
                        </div>
                        <p className='author'><strong>Author:</strong> {data.author}</p>
                        <p style={{ whiteSpace: 'pre-wrap' }} className='content'>{data.content}</p>
                    </div>
                ) : ''}
            </div>
            <div className='sticky'>
                <Search />
            </div>
        </div>
    )
}

export default PostID