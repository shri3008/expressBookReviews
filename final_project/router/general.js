const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();

public_users.post('/register',  (req,res) =>{
  let data = {
    firstName: req.query.firstName,
    lastName: req.query.lastName,
    email: req.query.email,
    DOB: req.query.DOB
  }
  console.log(data)
  users.push(data)
  console.log(users)
  res.send("The " + req.query.firstName + "has been added succesfully")
});

// Get the book list available in the shop
public_users.get('/',function (req, res) {
  res.send(books)
  //return res.status(300).json({message: "Yet to be implemented"});
}); 

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
 });
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
  const author = req.params.author;
  let filtered_book = Object.values(books).filter((book) => book.author === author);
  res.send(filtered_book);
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
  const title = req.params.title;
  let filtered_book = Object.values(books).filter((book) => book.title === title);
  return res.send(filtered_book)
  //return res.status(300).json({message: "Yet to be implemented"});
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

module.exports = public_users;
module.exports.users = users;
