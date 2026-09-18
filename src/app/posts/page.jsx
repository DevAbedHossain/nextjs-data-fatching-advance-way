import React from 'react';
import PostsCard from '../components/PostsCard';

// Data fetching option -02
// const postPromise = async () => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     return res.json();
// }

// Data fetching option- 03
// const getPosts = async () => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     return res.json();
// }

//Data Fetching option- 04
// const getPosts = async () => {
//     try {
//         const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//         return res.json();
//     } catch (error) {
//         throw new error("Failed to fetch posts")
//     }

// }

// Data fetching option- 05
const getPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!res.ok) {
        throw new error("Failed to fetch posts");
    }

    return res.json();
}

const PostPage = async () => {


    // Data fetching option- 01
    // const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    // const posts = await res.json();

    // const posts = await postPromise();

    const posts = await getPosts();

    return (
        <div>
            <h2>Post Page</h2>
            <h4>Total Post: {posts.length}</h4>
            <div className="grid grid-cols-4 gap-4">
                {
                    posts.map(post => <PostsCard key={post.id} post={post}></PostsCard>)
                }
            </div>
        </div>
    );
};

export default PostPage;