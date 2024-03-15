import React from "react";
import { useEffect } from "react";
import { useBooksContext } from "../hooks/useBookContext";

//components
import BookDetails from "../components/BookDetails";
import BookForm from "../components/BookForm";

import axios from "axios";
const Home = () => {
  const {books,dispatch}=useBooksContext()
  

  useEffect(() => {
    //using axios
    const fetchBooks = async () => {
      const { data } = await axios.get("http://localhost:1001/api/books");
      dispatch({type:'SET_BOOKS',payload:data})
    };

    fetchBooks();
  }, []);

  return (
    <div className="home flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between p-4">
      <BookForm  />
      <div className="books flex flex-col w-full lg:w-1/2 ">
        {books &&
          books.map((book) => (
            <BookDetails
              book={book}
              key={book._id}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
