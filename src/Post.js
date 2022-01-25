import React from 'react';
import LikeButton from './LikeButton'
import './App.css';
import Avatar from '@mui/material/Avatar';
import {yellow, green, pink,blue,red,orange } from '@mui/material/colors';

function Post (props) {
    const{name,content,likes} = props
    const getAvatarBgColor = () => ({
        1: yellow[700],
        2: green[500],
        3: pink[500],
        4: red[500],
        5: orange[500],
      }[likes] || blue[500]);

        return (
                <div className='post'>
                    <Avatar sx={{bgcolor: getAvatarBgColor()}}>{name.slice(0,2).toUpperCase()}</Avatar>
                    <h3>{name}</h3>
                    <p>{content}</p>
                    <p>Number of Likes</p>
                    <LikeButton likes={likes}/>
                </div>
                
        )
    }
export default Post;

