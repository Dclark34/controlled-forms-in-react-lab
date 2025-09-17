import { useState } from "react";



const Bookshelf = () => {

  //!display of shelf
  const [books, setBooks] = useState([])

  //!our controlled form
  const [newBooks, setNewBooks] = useState({
    title: '',
    author: '',
  })

  //HANDLERS

  const handleInputChange = (event) => {
    console.log(event.target.value);
    setNewBooks({ ...newBooks, [event.target.name]: event.target.value });
  }

  //Submit Handler

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submitted: ', newBooks);
    setBooks(prevBook => [...prevBook, newBooks]);// Need a bit more explanation on how this works. Same from zombies.
    setNewBooks({ title: '', author: '' });
  };


  return (

    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title: </label>
          <input id="title" name="title" value={newBooks.title} onChange={handleInputChange} />
          <label htmlFor="author">Author: </label>
          <input id="author" name="author" value={newBooks.author} onChange={handleInputChange} />
          <button type="submit">Add New Book</button>
        </form>
      </div>

      <div className="bookCardsDiv">
        {books.map((book, index) => (
          <div className="bookCard" key={index}>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;