const express = require('express');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
const port = 3000; // You can adjust the port number as needed

// Middleware for parsing JSON request bodies
app.use(express.json());

// Mount the routes
app.use('/api/tasks', taskRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});