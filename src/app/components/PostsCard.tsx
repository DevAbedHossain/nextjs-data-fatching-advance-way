import Link from 'next/link';
import React from 'react';

const PostsCard = ({ post }) => {

    const { id, title, body } = post;

    return (
        <div>
            <div className="card card-border bg-base-100">
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{body}</p>
                    <div className="card-actions justify-end">
                        <Link href={`/posts/${id}`} className="btn btn-primary">View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostsCard;