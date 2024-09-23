import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../redux/bookSlice';
import { Link } from 'react-router-dom';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState('');
  const [img, setImg] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author && description && rating && img) {
      dispatch(addBook({ title, author, category, description, rating, img }));
      navigate('/browse-books');
    }
  };

  return (
    <div className="add-book-container">
      <h2>Add a New Book</h2>
      <form className="add-book-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <div>
          <label className='cate' htmlFor="category">Category:</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="" disabled>Select a category</option>
            <option value="Fiction">Fiction</option>
            <option value="Non-Fiction">Non-Fiction</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Biography">Biography</option>
          </select>
        </div>
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
        <div>
          <label className='rate' htmlFor="rating">Rating (0-5):</label>
          <input
            type="number"
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            min="0"
            max="5"
            step="0.1"
            required
          />
        </div>
        <input
          type="text"
          placeholder='Enter image URL'
          onChange={(e) => setImg(e.target.value)}
          required
        />
        <button type="submit">Add Book</button>
      </form>

      <Link to={'/browse-books'} className="back-to-books-link">Back to Books</Link>
    </div>
  );
};

export default AddBook;
