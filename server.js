const express = require('express');
const path = require('path');
const app = express();


// Serve static files from the 'restaurant' folder
app.use(express.static(path.join(__dirname, '')));

// Serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Define a port for the server
const PORT = process.env.PORT || 3333;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:3333`);
});