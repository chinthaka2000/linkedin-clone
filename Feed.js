import React, { useEffect, useState } from 'react';
import "./Feed.css";
import CreateIcon from '@mui/icons-material/Create';
import CollectionsIcon from '@mui/icons-material/Collections';
import InputOption from './InputOption';
import VideoChatIcon from '@mui/icons-material/VideoChat';
import EventIcon from '@mui/icons-material/Event';
import RateReviewIcon from '@mui/icons-material/RateReview';
import Post from './Post';
import { db } from './firebase';
import { collection, addDoc, serverTimestamp, query, orderBy, onSnapshot } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';

function Feed() {
    const user = useSelector(selectUser);
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));
        const unsubscribe = onSnapshot(q, (snapshot) =>
            setPosts(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data(),
            })))
        );

        return () => unsubscribe();
    }, []);
    useEffect(() => {
        console.log('Feed component mounted'); // Corrected line
      }, []);
      

    const sendPost = async (e) => {
        e.preventDefault();
        await addDoc(collection(db, 'posts'), {
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl,
            timestamp: serverTimestamp() || "",
        });
        setInput("");
    };

    return (
        <div className='feed'>
            <div className='feed__inputContainer'>
                <div className='feed__input'>
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type='text' />
                        <button onClick={sendPost} type='submit'>Send</button>
                    </form>
                </div>
                <div className='feed__inputOption'>
                    <InputOption Icon={CollectionsIcon} title='Photo' color='#70B5F9' />
                    <InputOption Icon={VideoChatIcon} title='Video' color='#E7A33E' />
                    <InputOption Icon={EventIcon} title='Event' color='#C0CBCD' />
                    <InputOption Icon={RateReviewIcon} title='write article' color='#7FC151' />
                </div>
            </div>
            {/* posts */}
            <FlipMove>
            {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
            <Post
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />
                ))}
            </FlipMove>
            
                
            
        </div>
    );
}

export default Feed;
