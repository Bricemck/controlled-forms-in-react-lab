import { useState } from 'react';
//useState is a feature of React that allows us to manage multiple states on a page in real time.
//Here we are using it to turn form data into objects in a dynamically displayed array.


//Bookshelf is a Javascript function that returns JSX which is a syntax extension for writing 
//HTML like code in JavaScript.
//This is a React COMPONENT that accepts props.
//Props are values passed into the components from it's parent.
//Bookshelf expects a prop called books which is an array of book objects created by the 
//Input form we'll defind in app.jsx
const Bookshelf = ({ books }) => {
  return (
    <div className="bookshelfDiv">
        {/* Outer div for class styling. */}
      <h3>My Bookshelf</h3>
      <div className="bookCardsDiv">
        {/* Container for the book cards */}
        {books.map((book, index) => (
            // JS array method that iterates over each book in the array.
            // Book is a parameter and each book is an object that contains a title and an author
          <div key={index} className="bookCard">
            {/* Current index of each item in the array, used as a key for the book cards */}
            {/* In this case index of the map function is the key, but for larger lists 
            Or dynamic data we may want to use a unique value like a book ID */}
            <h4>{book.title}</h4>
            <p>{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
// You must export bookshelf so that it can be used in other files.
export default Bookshelf;


