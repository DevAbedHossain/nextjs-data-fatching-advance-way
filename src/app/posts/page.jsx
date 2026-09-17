import React from 'react';

const PostPage = async () => {

    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();

    return (
        <div>
            <h2>Post Page</h2>
            <h4>Total Post: {posts.length}</h4>
        </div>
    );
};

export default PostPage;