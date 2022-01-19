import React from 'react';
import LikeButton from './LikeButton'
import './App.css';
import Avatar from '@mui/material/Avatar';




function Post (props) {
    const{name} = props
    const{content} = props
    const{likes} = props
    
        return (
                <div className='post'>
                    <Avatar className='avatar' >{name[0].toUpperCase()}</Avatar>
                    <h3>{name}</h3>
                    <p>{content}</p>
                    <p>Number of Likes</p>
                    <LikeButton likes={likes}/>
                </div>
                
        )
    }
export default Post;

