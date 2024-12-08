const pool = require('./db/connection')


const query = async () => {
    try {
      await pool.connect();
      console.log('Connected to the database.');
    } catch (err) {
      console.error('Error connecting to database:', err);
      process.exit(1);
    }
  };