const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

app.post('/api', (req, res) => {
    res.send('POST route called')
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
