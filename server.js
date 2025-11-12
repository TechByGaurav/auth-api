const  express = require('express');
const dotenv =require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const path=require('path')



dotenv.config();
const app = express();




// middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// routes
app.use('/api/auth', authRoutes);
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'auth.html'));
});


// app.get('/', (req, res) => res.send('API Running...'));

// connect to DB and start server
connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
