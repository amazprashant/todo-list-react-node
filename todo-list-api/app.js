const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const todoRoutes = require('./routes/todoRoutes');
const sequelize = require('./config/database');

dotenv.config();

const app = express();

// Enable CORS
app.use(cors({
    origin: 'http://localhost:3000', // Replace with your React app's URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
}));

app.use(express.json());
app.use('/api', todoRoutes);

sequelize.sync().then(() => {
    console.log('Database connected');
});

module.exports = app;