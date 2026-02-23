// Vulnerable JavaScript with security issues
const express = require('express');
const app = express();

// Hardcoded credentials (security issue)
const dbPassword = "password123";
const apiKey = "sk_live_123456789";

// SQL Injection vulnerability
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    // Vulnerable to SQL injection
    const query = `SELECT * FROM users WHERE id = ${userId}`;
    db.query(query, (err, results) => {
        res.json(results);
    });
});

// Use of eval (security issue)
app.post('/calculate', (req, res) => {
    const expression = req.body.expression;
    const result = eval(expression); // Dangerous!
    res.json({ result });
});

// Insecure random number generation
const insecureToken = Math.random().toString(36); // Not cryptographically secure

app.listen(3000);