require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
const { errorHandler } = require('./middleware/errorHandler');

connectDB();

const app = express();

// CORS configuration - allow all localhost origins
app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);

    // Allow localhost origins
    if (origin.includes('localhost') || origin.includes('127.0.0.1')) {
      return callback(null, true);
    }

    // Reject other origins
    callback(new Error('Not allowed by CORS'));
  },
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', require('./routes/auth'));
app.use('/api/predictions', require('./routes/predictions'));
app.use('/api/exports', require('./routes/exports'));
app.use('/api/followup', require('./routes/followup'));

app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'HeartSafe API is running'
  });
});

app.use('/', (req, res) => {
  if (req.path !== '/') {
    res.status(404).json({
      success: false,
      message: 'Route not found'
    });
  } else {
    res.status(200).json({
      success: true,
      message: 'HeartSafe Backend API Server'
    });
  }
});

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

process.on('unhandledRejection', (err) => {
  console.error(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});