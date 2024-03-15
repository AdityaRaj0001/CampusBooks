import { useState } from "react";
import axios from "axios";
import { useBooksContext } from "../hooks/useBookContext";
const BookForm = () => {
  const {dispatch}=useBooksContext()
  const [name, setName] = useState("");
  const [Author, setAuthor] = useState("");
  const [Genre, setGenre] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!name || !Author || !Genre){
      setError("Please fill All the fields")
      return;
    }

    const resp = await axios.post("http://localhost:1001/api/books", {
      Name: name,
      Author: Author,
      Genre: Genre,
    });

    if (resp.data) {
      setError(null);
      setName("");
      setAuthor("");
      setGenre("");
      dispatch({type:'CREATE_BOOK',payload:resp.data})
    }
  };

  return (
    <form onSubmit={handleSubmit} className="create w-full lg:w-1/3  flex flex-col gap-4">
      <h3 className="text-xl font-bold">Add a new Book</h3>

      <label className="font-bold">Book Name:</label>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
        placeholder="Name of the Book"
        className="w-full h-[30px] border-black border-2 "
        value={name}
        
      />

      <label className="font-bold">Author:</label>
      <input
        type="text"
        onChange={(e) => {
          setAuthor(e.target.value);
        }}
        placeholder="Name of the Author"
        className="w-full h-[30px] border-black border-2 "
        value={Author}
      />

      <label className="font-bold">Genre:</label>
      <input
        type="text"
        onChange={(e) => {
          setGenre(e.target.value);
        }}
        placeholder="Genre of the Book"
        className="w-full h-[30px] border-black border-2 "
        value={Genre}
      />

      <button type="submit" className="bg-gray-300 w-1/2 rounded-lg p-4 font-bold text-left">Add Book</button>
      {error && <div className="error text-red-500 text-lg w-full h-[30px]">{error}</div>}
    </form>
  );
};

export default BookForm;
