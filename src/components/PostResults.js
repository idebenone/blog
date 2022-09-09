import React from 'react'

const PostResults = (props) => {

    return (
        <div className='resContainer col'>
            <span className='res'>{props.name}</span>
            <span className='type'
                style={{ backgroundColor: props.type === 'Tech' ? 'green' : props.type === 'Entertainment' ? 'black' : 'red' }}
            >{props.type}</span>
        </div>
    )
}

export default PostResults