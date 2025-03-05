const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

// Import routes
const novaRoute = require('./Routes/NovaRoute');

// Middleware 
app.use(cors());
app.use(express.json());

// Routes
app.use('/nova', novaRoute);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
