const express = require('express');
const app = express();
const port = 3000;

// Example endpoint
app.get('/api/ReactToNode', (req, res) => {
    // Extract query parameters (if any)
    const { name } = req.query;

    // Send a response with some data
    res.status(200).json({
        message: `Hello, ${name || 'World'}! This is data from the Node.js backend.`,
        timestamp: new Date().toISOString()
    });
});

app.listen(port, () => {
    console.log(`Node.js backend running at http://localhost:${port}`);
});