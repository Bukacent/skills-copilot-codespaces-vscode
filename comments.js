// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create comments array
let comments = [
  {
    id: 1,
    username: 'Alice',
    comment: 'I love this article!'
  },
  {
    id: 2,
    username: 'Bob',
    comment: 'Good job.'
  }
];

// Get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Get a comment by id
app.get('/comments/:id', (req, res) => {
  const id = req.params.id;
  const comment = comments.find(comment => comment.id === Number(id));
  res.json(comment);
});

// Create a comment
app.post('/comments', (req, res) => {
  const newComment = {
    id: comments.length + 1,
    username: req.query.username,
    comment: req.query.comment
  };
  comments.push(newComment);
  res.json(newComment);
});

// Update a comment
app.put('/comments/:id', (req, res) => {
  const id = req.params.id;
  const comment = comments.find(comment => comment.id === Number(id));
  comment.username = req.query.username;
  comment.comment = req.query.comment;
  res.json(comment);
});

// Delete a comment
app.delete('/comments/:id', (req, res) => {
  const id = req.params.id;
  comments = comments.filter(comment => comment.id !== Number(id));
  res.json({ message: 'Comment deleted' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});