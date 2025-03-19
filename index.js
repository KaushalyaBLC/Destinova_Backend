const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

//  Connection to MongoDB
const connectDB = require('./Util/connectDB');
connectDB();

// Import routes
const novaRoute = require('./Routes/NovaRoute');
const crystalRoute = require('./Routes/crystalRoute');

// Middleware 
app.use(cors());
app.use(express.json());


// Routes
app.use('/nova', novaRoute);
app.use('/crystal', crystalRoute);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
