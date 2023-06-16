// server.js

import express from 'express';
import * as path from "path";


const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Home page route
app.get('/', (req, res) => {
    res.send('Welcome to the home page!');
});
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

// Login page route
app.get('/login', (req, res) => {
    res.send('Please login to continue.');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
