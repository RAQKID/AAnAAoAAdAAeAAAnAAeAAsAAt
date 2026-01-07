const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Redirect dashboard routes to dashboard.html
app.get(['/dashboard', '/dashboard.html'], (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

// Catch all invalid routes and redirect to /
app.get('*', (req, res) => {
    res.redirect('/');
});

// Serve a simple home page at /
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

app.listen(PORT, () => {
    console.log(`NodeNest Website running on http://localhost:${PORT}`);
});