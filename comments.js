// Create web server
// Define the routes
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const comments = [
    {
        id: 1,
        comment: 'Hello'
    },
    {
        id: 2,
        comment: 'World'
    }
];
app.get('/comments', (req, res) => {
    res.json(comments);
});
app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    res.send('Comment is added to the database');
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
// Run the server by running node comments.js
// Open Postman and make a GET request to http://localhost:3000/comments
// You will see the comments array
// Make a POST request to http://localhost:3000/comments with the following body:
// {
//     "id": 3,
//     "comment": "New comment"
// }
// Make a GET request to http://localhost:3000/comments
// You will see the new comment added to the comments array