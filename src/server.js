const dotenv = require('dotenv');
dotenv.config();

const app = require('./app');
const connectDB = require('./config/db');

// global error
process.on('uncaughtException', (err) => {
  console.error('UNCAUGHT EXCEPTION', err);
  process.exit(1);
});

// DB
connectDB();

// server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/`);
});

// async errors
process.on('unhandledRejection', (err) => {
  console.error('UNHANDLED REJECTION', err);

  server.close(() => {
    process.exit(1);
  });
});
