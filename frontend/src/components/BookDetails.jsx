import React, { useState } from 'react';
import axios from 'axios';
import { useBooksContext } from '../hooks/useBookContext';
import UpdateBookModal from './UpdateBookModal';

const BookDetails = ({ book }) => {
  const { dispatch } = useBooksContext();
  const [showModal, setShowModal] = useState(false);

  const handleClick = async () => {
    const resp = await axios.delete(
      'http://localhost:1001/api/books/' + `${book._id}`
    );

    if (resp.data) {
      dispatch({ type: 'DELETE_BOOK', payload: resp.data });
    }
  };

  const updateBook = async (id, newName, newAuthor, newGenre) => {
    const resp = await axios.patch(
      'http://localhost:1001/api/books/' + `${id}`,
      { Name: newName, Author: newAuthor, Genre: newGenre }
    );

    if (resp.data) {
      // Update book details in the state
      dispatch({ type: 'UPDATE_BOOK', payload: resp.data });
      // Close the modal
      setShowModal(false);
    }
  };

  return (
    <div className="book-details border-2 border-black p-4">
      <p >
        <strong className='mr-4'>Book:</strong>
        {book.Name}
      </p>
      
      <p>
        <strong className='mr-4'>Author:</strong>
        {book.Author}
      </p>
      <p className='mb-4 '>
        <strong  className='mr-4'>Genre:</strong>
        {book.Genre}
      </p>
    <div className='flex w-full mb-2 mt-2'>
    <button className="bg-gray-300 w-[100px] cursor-pointer p-2 mr-4 rounded-lg font-bold" onClick={handleClick}>delete</button>
      <button className="bg-gray-300 w-[100px] cursor-pointer p-2 mr-4 rounded-lg font-bold" 
   style={{ display: showModal ? 'none' : 'block' }} 
   onClick={() => setShowModal(true)}>Update</button>
    </div>
      {showModal && (
        <UpdateBookModal  book={book} updateBook={updateBook} />
      )}
    </div>
  );
};

export default BookDetails;
