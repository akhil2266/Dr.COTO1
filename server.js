const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route to handle account details submission
app.post('/api/account', (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: 'All fields are required.' });
    }
    

    console.log('Account Details Received:');
    console.log(`Username: ${username}`);
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);

    // Here you can save the details to a database
    res.status(200).json({ message: 'Account details successfully received.' });
});

// submit button js code for backend
app.post('/api/submit-request', (req, res) => {
    const { message } = req.body;

    if (!message) {
        return res.status(400).json({ error: 'Message is required.' });
    }

    console.log('New message received:', message);

    // Respond to the frontend
    res.status(200).json({ message: 'Request submitted successfully.' });
});


// Start server

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

