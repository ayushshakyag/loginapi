const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const users = [{name:"nameis", password:"pass123"}]

app.get('/users', (req,res) =>{
  res.json(users)
})

app.post('/users', (req, res)=> {
  const user = {name: req.body.name, password: req.body.password}
  users.push(user)
  res.status(201).send()
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// User login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;
    // Find the user in the users array based on the provided username
    const user = users.find((user) => user.name === username);
  
    // If the user is not found or the password doesn't match, return an error response
    if (!user || user.password !== password) {
      return res.status(401).json({ error: 'Invalid username or password.' });
    }
  
    // If the user is found and the password matches, return a success response
    res.json({ message: 'Login successful!' });

  // Validate username
  if (!/^[a-zA-Z0-9]{6,12}$/.test(username)) {
    return res.status(400).json({ error: 'Invalid username. Username should be alphanumeric and between 6-12 characters.' });
  }

  // Validate password
  if (!/^[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]{6,}$/.test(password)) {
    return res.status(400).json({ error: 'Invalid password. Password should contain alphabet, numbers, and special characters and have a minimum length of 6 characters.' });
  }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});