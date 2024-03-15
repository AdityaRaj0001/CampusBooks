import React, { useState } from 'react';

const UpdateBookModal = ({ book, updateBook }) => {
  const [newName, setNewName] = useState(book.Name);
  const [newAuthor, setNewAuthor] = useState(book.Author);
  const [newGenre, setNewGenre] = useState(book.Genre);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call updateBook function to update book details
    updateBook(book._id, newName, newAuthor, newGenre);
    // Clear input fields
    setNewName('');
    setNewAuthor('');
    setNewGenre('');
  };

  return (
    <div className="modal mt-4 flex flex-col">
      <form onSubmit={handleSubmit} className='flex flex-col'>
        <h3 className='font-bold mb-2'>Update Book Details:</h3>
        <label className="font-bold w-full">New Name:</label>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          className="w-full h-[30px] border-black border-2 "
        />
        <label className="font-bold">New Author:</label>
        <input
          type="text"
          value={newAuthor}
          onChange={(e) => setNewAuthor(e.target.value)}
          className="w-full h-[30px] border-black border-2 "
        />
        <label className="font-bold">New Genre:</label>
        <input
          type="text"
          value={newGenre}
          onChange={(e) => setNewGenre(e.target.value)}
          className="w-full h-[30px] border-black border-2 "
        />
        <button type="submit" className="bg-gray-300 w-[100px]  rounded-lg p-4 font-bold text-left mt-2" >Update</button>
      </form>
    </div>
  );
};

export default UpdateBookModal;
