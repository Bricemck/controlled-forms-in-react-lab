// src/App.jsx


//Use state is a react 'hook' for state management.  We use this to store and update values
//like the book list and input values.
import { useState } from 'react';
//Stylesheet
import './index.css'
//import the component function responsible for displaying the list of books.
import Bookshelf from './components/Bookshelf/Bookshelf.jsx';


//Another functional component
const App = () => {
  //books is the current list of books (defined by user input below in our form)
  //setBooks is the function to update the list.
  //We initialize an empty array since there are no books when the app first loads.
  const [books, setBooks] = useState([]);

  //newBook is an object representing the form input (title and author).
  //setNewBook function to update the form fields.
  //We set empty strings for both fields to accept user input.
  const[newBook, setNewBook] = useState({
    title: '',
    author: '',
  });

  //handleInputChange is a form handler that runs every time the user types into the input field.
  //it uses computed property names ([event.target.name]) to update either title or author.
  //We use the spread operator (...newBook) to keep the other field unchanged. 
  const handleInputChange = (event) => {
    setNewBook({...newBook, [event.target.name]: event.target.value });
  };

  //handleSubmit is the form SUBMIT handler.
  //event.preventDefault prevents page reloading.  Thanks react!
  //Adds current newBook (input form values defined below) to the books array using another spread operator.
  //Resets the form fields using empty strings.
  const handleSubmit = (event) => {
    event.preventDefault();
    setBooks([...books, newBook]);
    setNewBook({ title: '', author: ''});
  }

//This is where title and author are tied to newBook via value.  
//HandleInputChange above assists with this form.
  return (
    <>
      <h1>My Bookshelf</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title: </label>
        <input
          id='title'
          name='title'
          value={newBook.title}
          onChange={handleInputChange}
          />
        <label htmlFor='author'>Author: </label>
        <input id='author'
        name='author'
        value={newBook.author}  
        onChange={handleInputChange} />
        <button type='submit'>Submit your Book</button>
      </form>
      <Bookshelf books={books} />
    </>
  );
};

export default App;

