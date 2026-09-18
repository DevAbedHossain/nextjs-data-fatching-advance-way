import React from 'react';

const PostDetailsPage = async ({ params }) => {

    const { postId } = await params;

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const post = await res.json();

    const { id, title, body } = post;

    return (
        <div>
            <h2>Post Details Page</h2>
            <hr />
            <div className="card bg-base-100 w-100 mx-auto shadow-sm my-5">
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{body}</p>

                </div>
            </div>
        </div>
    );
};

export default PostDetailsPage;