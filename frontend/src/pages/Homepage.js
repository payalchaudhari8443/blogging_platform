import React from 'react';
import { Link } from 'react-router-dom';

function Homepage({ posts }) {
    return (
        <div>
            <h1>Blog Posts</h1>
            {posts.map((post) => (
                <div key={post._id}>
                    <h2>{post.title}</h2>
                    <p>{post.summary}</p>
                    <p>{new Date(post.date).toLocaleDateString()}</p>
                    <Link to={`/post/${post._id}`}>Read More</Link>
                    <Link to={`/edit/${post._id}`}>Edit</Link>
                    <button>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default Homepage;
