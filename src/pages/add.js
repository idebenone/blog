import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Add = () => {
    const history = useNavigate();

    const initialState = { name: '', author: '', content: '', type: '' }
    const [input, setInput] = useState(initialState)
    const { name, author, content, type } = input;

    const handleChange = (e) => {
        const { name, value } = e.target
        setInput({ ...input, [name]: value })
    }

    const fetchHandler = () => {
        axios.post('https://mern-anime.herokuapp.com/api/post', input)
            .then(res => console.log(res.data))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(input)
        fetchHandler();
        history('/blog/');
    };



    return (
        <div className='formCont center'>
            <form onSubmit={handleSubmit} className='form col'>
                <div className='col formGrp'>
                    <label htmlFor='name'>Article Name</label>
                    <input id='name' type='text' name='name' value={name} onChange={handleChange} required />
                </div>
                <div className='col formGrp'>
                    <label htmlFor='author'>Author Name</label>
                    <input id='author' type='text' name='author' value={author} onChange={handleChange} required />
                </div>
                <div className='col formGrp'>
                    <label htmlFor='content'>Content</label>
                    <textarea id='content' type='text' name='content' value={content} onChange={handleChange} rows='30' required />
                </div>
                <div className='row slct'>
                    <div className='col formGrp'>
                        <select id='type' name='type' value={type} onChange={handleChange} required>
                            <option value="" disabled selected>Select your option</option>
                            <option name='Tech' >Tech</option>
                            <option name='Entertainment'>Entertainment</option>
                            <option name='Community'>Community</option>
                        </select>
                    </div>
                    <button className='publish'>Publish</button>
                </div>
            </form>
        </div>
    )
}

export default Add