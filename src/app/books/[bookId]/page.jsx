import Image from 'next/image';
import React from 'react';

export const generateStaticParams = async () => {
    const res = await fetch("http://localhost:5000/books");
    const books = await res.json();

    return books.map(book => ({ bookId: book.id }))
}

const BookDetailsPage = async ({ params }) => {
    const { bookId } = await params;

    const res = await fetch(`http://localhost:5000/books/${bookId}`);
    const book = await res.json();

    const { id, name, image, category, description, price, rating } = book;



    return (
        <div>
            <h2>Book Details page</h2>
            <hr />
            <div className="card card-side bg-base-100 w-6/12 shadow-sm mx-auto my-5">
                <figure>
                    <Image src={image} width={500} height={500} alt={name} className="w-full h-80 object-cover"></Image>
                    {/* <img
                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                        alt="Movie" /> */}
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{rating}</p>
                    <p>{category}</p>
                    <p>{price}</p>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default BookDetailsPage;