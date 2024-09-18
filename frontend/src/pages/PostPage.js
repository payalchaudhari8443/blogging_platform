import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function PostPage() {
    const { id } = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        axios.get(`/posts/${id}`)
            .then((response) => setPost(response.data))
            .catch((error) => console.error(error));
    }, [id]);

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
}

export default PostPage;
