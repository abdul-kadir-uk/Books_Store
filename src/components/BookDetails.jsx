import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BookDetails = () => {
  const { id } = useParams();
  const books = useSelector((state) => state.books.books);

  const book = books.find((book) => book.id === parseInt(id));

  return (
    <div className="book_details">
      {book ? (
        <>
          <h2>{book.title}</h2>
          <img src={book.img} alt={book.title} className="book_image_details" />
          <p>by {book.author}</p>
          <p className="book_description">{book.description}</p>

          <p>Rating: {book.rating}</p>
          <Link to="/books-list" className="back_button">Back to Books</Link>
        </>
      ) : (
        <p>Book not found</p>
      )}
    </div>
  );
};

export default BookDetails;
