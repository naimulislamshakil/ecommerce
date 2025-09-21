const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const userRoute = require('./Route/user.route');

// Middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// Database
mongoose
	.connect('mongodb://0.0.0.0:27017/', {})
	.then(() => console.log('Database connected successfully.'))
	.catch((err) => console.log(err));

// Routes
app.get('/', (req, res) => {
	res.send('<h1>How are you?</h1>');
});

app.use('/api/v1', userRoute);

// Start server
app.listen(PORT, () => {
	console.log(`Server is running on port: ${PORT}`);
});
