import React from 'react';
import BooksCard from '../components/BooksCard';

const getBooks = async () => {
    const res = await fetch("http://localhost:5000/books", { next: { revalidate: 10 } }); // 10 second por data update hobe

    if (!res.ok) {
        throw new Error("Failed to fetching books")
    }

    return res.json();
}

const BooksPage = async () => {



    const books = await getBooks();
    return (
        <div>
            <h2>Books: {books.length}</h2>

            <div className="grid grid-cols-4 gap-4">
                {
                    books.map(book => <BooksCard key={book.id} book={book}></BooksCard>)
                }
            </div>
        </div>
    );
};

export default BooksPage;