import React from 'react';
import './BookStore.css';
const BookStore = ({book}) => {
    console.log(book)
    return (
        <div className='book'>
            <h4>Book_Name: {book.name} </h4>
        </div>
    );
};

export default BookStore;