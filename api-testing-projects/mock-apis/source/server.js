const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());


app.post('/users/register', (req, res) => {

    if (!req.body.username || !req.body.email || !req.body.password) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    const existingUser = users.find(user => user.email === req.body.email);
    if (existingUser) {
        return res.status(409).json({ error: 'User already exists' });
    }

    const userId = Math.floor((Math.random() * 1000000) + 1);

    const newUser = {
        userId,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    };
    users.push(newUser);

    res.status(200).json({ userId, message: 'User registered successfully' });
});

app.post('/users/login', (req, res) => {
    if (!req.body.username || !req.body.password) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    const user = users.find(user => user.username === req.body.username);

    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }

    if (!user || user.password !== req.body.password) {
        return res.status(401).json({ error: 'Invalid username or password' });
    }

    const token = generateToken(user.userId);

    res.status(200).json({ userId: user.userId, token });
});

// Function to generate a mock JWT token
function generateToken(userId) {
    return `mock-token-${userId}`;
}

app.get('/books', (req, res) => {
    const searchQuery = req.query.search;
    if (!searchQuery) {

        return res.status(400).json({ error: 'Missing search query' });
    }

    const matchedBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (matchedBooks.length === 0) {
        return res.status(404).json({ error: 'No books found matching the search query' });
    }

    res.status(200).json(matchedBooks);
});
app.post('/users/{userId}/cart', (req, res) => {
    const userId = req.params.userId;

    if (!userId) {
        return res.status(400).json({ error: 'Invalid user ID' });
    }

    if (!req.body.bookId || !req.body.quantity) {
        return res.status(400).json({ error: 'Missing required fields' });
    }


    const user = users.find(user => user.userId === userId);
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }

    const book = books.find(book => book.bookId === req.body.bookId);
    if (!book) {
        return res.status(404).json({ error: 'Book not found' });
    }

    const quantity = parseInt(req.body.quantity);
    if (isNaN(quantity) || quantity <= 0) {
        return res.status(400).json({ error: 'Invalid quantity' });
    }

    user.cart.push({ bookId: book.bookId, quantity });

    res.status(200).json({ message: 'Book added to cart successfully' });
});

app.post('/users/:userId/checkout', (req, res) => {
    const userId = req.params.userId;

    if (!userId) {
        return res.status(400).json({ error: 'Invalid user ID' });
    }

    const user = users.find(user => user.userId === userId);
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }

    if (user.cart.length === 0) {
        return res.status(400).json({ error: 'Cart is empty' });
    }

    res.status(200).json({ message: 'Checkout successful' });
});


// Start the server
app.listen(port, () => {
    console.log(`Mock server listening at http://localhost:${port}`);
});
module.exports = app