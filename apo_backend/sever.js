import express from 'express';
import { createConnection } from 'mysql2';
import { json } from 'body-parser';

const app = express();
const port = 3000; // You can use any port you prefer

// MySQL connection configuration
const connection = createConnection({
  host: 'your-mysql-host',
  user: 'your-mysql-user',
  password: 'your-mysql-password',
  database: 'your-mysql-database',
});

// Middleware for parsing JSON data
app.use(json());

// API endpoint for validating username and password
app.post('/api/validate', (req, res) => {
  const { username, password } = req.body;
  
  // Query to fetch customer by name and password
  const query = 'SELECT * FROM consultantCustomers WHERE name = ? AND password = ?';
  
  // Execute the query
  connection.query(query, [username, password], (err, results) => {
    if (err) {
      console.error('Error executing query: ', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    
    if (results.length === 1) {
      // Username and password are valid
      return res.json({ isValid: true, customer: results[0] });
    } else {
      // Invalid username or password
      return res.json({ isValid: false });
    }
  });
});
app.get('/user-customer-mapping', (req, res) => {
  const query = `
    SELECT user.User_id, user.Username, customer.Customer_id, customer.Customer_name
    FROM user
    INNER JOIN customer ON user.User_id = customer.User_id
  `;
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error retrieving user-customer mapping:', err);
      res.status(500).json({ error: 'An error occurred' });
    } else {
      res.json(results);
    }
  });
});
// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
