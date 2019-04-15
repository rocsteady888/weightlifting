const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const users = require('./server/routes/api/users');
const profile = require('./server/routes/api/profile');
const session = require('./server/routes/api/session');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

// DB Config 
const db = require('./server/config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello World'));

// Routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/session', session);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));