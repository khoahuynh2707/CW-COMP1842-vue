const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const bookRoutes = require('./api/routes/bookRoutes');
const authRoutes = require('./api/routes/authRoutes');

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());

//connect mongoDB
mongoose.connect('mongodb+srv://khoa123:khoa123@fgwweb2.egz1mic.mongodb.net/books', {
  useNewUrlParser: true
});

//get data from API
app.use('/api/books', bookRoutes);
app.use('/api/auth', authRoutes);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
