import React from 'react';
import LikeButton from './LikeButton'
import './App.css';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';




function Post (props) {
    const{name} = props
    const{content} = props
    const{likes} = props
    
        return (
                <div className='post'>
                    <Avatar sx={{ bgcolor: deepOrange[500] }}>{name[0].toUpperCase()}</Avatar>
                    <h3>{name}</h3>
                    <p>{content}</p>
                    <p>Number of Likes</p>
                    <LikeButton likes={likes}/>
                </div>
                
        )
    }
export default Post;

