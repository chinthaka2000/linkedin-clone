import React from 'react';
import "./Sidebar.css";
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
function Sidebar() {
    const user = useSelector(selectUser);
    const recentItem = (topic) => (
        <div className='sidebar__recentItem'>
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>
    )
  return (
    <div className='sidebar'>
        <div className='sidebar__top'>
        <img src='aa.jpeg' alt='me' />
        <Avatar src={user.photoURL} className='sidebar__avatar'>
             {user.email[0]}
             </Avatar>

        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
        <div className='sidebar_stats'>
            <div className='sidebar__stat'>
                <p>Who viewed you</p>
                <p className='sidebar__statNumber'>23</p>
            </div>
            <div className='sidebar__stat'>
            <p>views on post</p>
            <p className='sidebar__statNumber'>432</p>
            </div>
        </div>
        
    </div>
    <div className='sidebar__bottom'>
            <p>Recent</p>
            {recentItem("reactJs")}
            {recentItem("Programming")}
            {recentItem("Software Engineering")}
            {recentItem("Designing")}
            {recentItem("Developer")}
        </div>
    </div>
  );
}

export default Sidebar;
