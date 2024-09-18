import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};


const BooksList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const books = useSelector((state) => state.books.books);
  const query = useQuery();
  const category = query.get('category');

  const filteredBooks = books.filter((book) => {
    if (category) {
      return book.category.toLowerCase() === category.toLowerCase();
    }
    return (
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className='Books_list_box'>
      <div className="search_box">
        <input
          type="text"
          placeholder="Search by title or author"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="books_grid">
        {filteredBooks.map((book) => (
          <div key={book.id} className="book_card">
            <img src={book.img} alt={book.title} className="book_image" />
            <h2 className="book_title">{book.title}</h2>
            <p className="book_author">by {book.author}</p>
            <Link to={`/book/${book.id}`} className="view_details_button">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksList;
