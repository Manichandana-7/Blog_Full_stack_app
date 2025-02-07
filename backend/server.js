const connectDB=require('./config.js');
const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const BlogStore=require('./models/BlogStore.js');
const blogRoutes = require('./routes/blogRoutes');

const app=express();

app.use(cors());
app.use(express.json());
connectDB();
app.use('/blogs', blogRoutes);
app.get('/', (req, res) => {
  res.send('Server is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});