const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Home route (dashboard)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

// Redirect /dashboard or /dashboard.html to home
app.get(['/dashboard', '/dashboard.html'], (req, res) => {
    res.redirect('/');
});

// Catch all invalid routes and redirect to home
app.get('*', (req, res) => {
    res.redirect('/');
});

app.listen(PORT, () => {
    console.log(`NodeNest Website running on http://localhost:${PORT}`);
});
