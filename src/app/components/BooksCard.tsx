import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BooksCard = ({ book }) => {

    const { id, name, description, image } = book;

    return (
        <div>
            <div className="card bg-base-100 shadow-sm">
                <figure className="px-2 pt-2">
                    <Image
                        src={image}
                        alt={name}
                        width={500}
                        height={500}
                        className="w-full h-80 rounded-xl object-cover"
                    />
                    {/* <img
                        src={image}
                        alt="Shoes"
                         /> */}
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <div className="card-actions">
                        <Link href={`/books/${id}`} className="btn btn-primary">View Details</Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default BooksCard;