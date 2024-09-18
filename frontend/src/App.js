import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './pages/Homepage';
import PostPage from './pages/PostPage';
import CreateEditPost from './pages/CreateEditPost';

function App() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('/posts')
            .then((response) => setPosts(response.data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <Router>
            <Switch>
                <Route path="/" exact component={() => <Homepage posts={posts} />} />
                <Route path="/post/:id" component={PostPage} />
                <Route path="/create" component={CreateEditPost} />
                <Route path="/edit/:id" component={CreateEditPost} />
            </Switch>
        </Router>
    );
}

export default App;
