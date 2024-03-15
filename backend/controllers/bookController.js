const Book = require("../models/bookModel");
const mongoose = require("mongoose");

//get all Books

const getBooks = async (req, res) => {
  const books = await Book.find().sort({ createdAt: -1 });

  if (!books) {
    return res.status(500).json({ msg: "issue at our end sorry :( !" });
  }

  res.status(200).json(books);
};

// create a book

const createBook = async (req, res) => {
  const { Name, Author, Genre } = req.body;

  //add to database
  try {
    const book = await Book.create({ Name, Author, Genre });
    res.status(200).json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete a Book

const deleteBook = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "invalid book ID" });
  }

  const book = await Book.findOneAndDelete({ _id: id });

  if (!book) {
    return res.status(404).json({ error: "No such book exist" });
  }

  res.status(200).json(book); //return the book you deleted
};

//update a book

const updateBook = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "invalid Book ID" });
  }

  const book = await Book.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    },
    { returnDocument: "after" }
  );

  if (!book) {
    return res.status(404).json({ error: "No such book exist" });
  }

  res.status(200).json(book); //gets you the updated book details
};

module.exports = {
  getBooks,
  createBook,
  deleteBook,
  updateBook,
};
