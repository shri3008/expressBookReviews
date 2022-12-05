const express = require('express');
const jwt = require('jsonwebtoken');
let books = require("./booksdb.js");
const regd_users = express.Router();


let users = [
  {
      firstName: "John",
      lastName: "wick",
      email:"johnwick@gamil.com",
      DOB:"22-01-1990",
  },
  {
      firstName: "John",
      lastName: "smith",
      email:"johnsmith@gamil.com",
      DOB:"21-07-1983",
  },
  {
      firstName: "Joyal",
      lastName: "white",
      email:"joyalwhite@gamil.com",
      DOB:"21-03-1989",
  },
];

const isValid = (username)=>{ //returns boolean
//write code to check is the username is valid
  let user = users.filter((user) => user.firstName === username)
  if (user) {
    return true
  }
  else {
    return false
  }

}

const authenticatedUser = (username,password)=>{ //returns boolean
//write code to check if username and password match the one we have in records.
let user = users.filter((user) => user.firstName === username)
if(user.DOB === password) {
  return true
}
else {
  return false
}

}

//only registered users can login
regd_users.get("/login", (req,res) => {
  //Write your code here
  console.log(users)
  const username = req.query.name;
  console.log(username)
  
  let accessToken = jwt.sign({
    data: username
  }, 'access', {expiresIn: 60*60});
  req.session.authorization = {
    accessToken
  }
  console.log(accessToken)
  console.log(req)
  // return res.status(200).json({message: "login successsfully"});
});

// Add a book review
regd_users.put("/auth/review/:isbn", (req, res) => {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

module.exports = regd_users;
//module.exports.isValid = isValid;
module.exports.users = users;
