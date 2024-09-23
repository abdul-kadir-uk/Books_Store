import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const HomePage = () => {
  const books = useSelector((state) => state.books.books);

  const popularBooks = books.filter((book) => book.rating > 4).slice(0, 4);

  return (
    <div className='home'>
      <h1 className='home_head'>Welcome to the Online Library</h1>
      <p className='home_para'>Enjoy the best collections of books!</p>

      <div className="home_fiction">
        <h2 className='home_cat'>Categories</h2>
        <ul className='home_ul'>
          <li><Link to="/browse-books?category=Fiction">Fiction</Link></li>
          <li><Link to="/browse-books?category=Non-Fiction">Non-Fiction</Link></li>
          <li><Link to="/browse-books?category=Science Fiction">Sci-Fi</Link></li>
          <li><Link to="/browse-books?category=Biography">Biography</Link></li>
        </ul>
      </div>

      <div className='home_pop'>
        <h2>Popular Books</h2>
        <div className="popular_books_grid">
          {popularBooks.map((book) => (
            <div key={book.id} className="book_card">
              <img src={book.img} alt={book.title} className="book_image" />
              <h3>{book.title}</h3>
              <p>by {book.author}</p>
              <button className='h_btn_details'>
                <Link to={`/book/${book.id}`} className="view_details_button">View Details</Link>
              </button>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
