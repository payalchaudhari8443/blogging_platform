import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

function CreateEditPost() {
    const { id } = useParams();
    const history = useHistory();
    const [post, setPost] = useState({ title: '', content: '', summary: '' });

    useEffect(() => {
        if (id) {
            axios.get(`/posts/${id}`)
                .then((response) => setPost(response.data))
                .catch((error) => console.error(error));
        }
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (id) {
            axios.put(`/posts/${id}`, post)
                .then(() => history.push('/'))
                .catch((error) => console.error(error));
        } else {
            axios.post('/posts', post)
                .then(() => history.push('/'))
                .catch((error) => console.error(error));
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={post.title}
                onChange={(e) => setPost({ ...post, title: e.target.value })}
                required
            />
            <textarea
                placeholder="Content"
                value={post.content}
                onChange={(e) => setPost({ ...post, content: e.target.value })}
                required
            ></textarea>
            <input
                type="text"
                placeholder="Summary"
                value={post.summary}
                onChange={(e) => setPost({ ...post, summary: e.target.value })}
            />
            <button type="submit">{id ? 'Update' : 'Create'} Post</button>
        </form>
    );
}

export default CreateEditPost;
