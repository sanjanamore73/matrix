const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from project root (HTML, css/, js/, images/, etc.)
app.use(express.static(path.join(__dirname)));

// Fallback to index.html for SPA-style navigation
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Sanju site running at http://localhost:${PORT}`);
});
