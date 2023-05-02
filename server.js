const express = require('express');
const router = express.Router();
const formidable = require('formidable');
const form = formidable({ multiples: true });
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');



router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());


const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

//Routing
router.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
});

router.get('/rock-paper-scissors', (req, res) => {
  res.sendFile(__dirname + '/Challenge.html');
});

router.get('/login', (req, res) => {
  res.sendFile(__dirname + '/login.html');
});

router.get('/signup', (req, res) => {
  res.sendFile(__dirname + '/signup.html');
});

//Login page
router.post('/login', (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  
//Cek login
  if (!email || !password) {
    res.status(400).send('Email and password are required');
    return;
  }
  function lookupUser(email, password) {
    const usersFile = path.join(__dirname, 'users.json');
    const usersData = fs.readFileSync(usersFile);
    const users = JSON.parse(usersData).users;
    const user = users.find(user => user.email === email && user.password === password);
    return user;
  }
  
  const user = lookupUser(email, password);
  if (user) {
  
    next();
  } else {
    res.status(401).send('Invalid email or password');
  }
}, (req, res) => {

  res.redirect('/rock-paper-scissors');
});

//register data user
router.post('/user', (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

//input data register
if (!username || !email || !password) {
    res.status(400).send('Harap isi semua data');
    return;
  }
  const user = {
    email: email,
    password: password,
    name: username
  };
  const usersFile = path.join(__dirname, 'users.json');
  let usersData = fs.readFileSync(usersFile, 'utf-8');
  let users = [];
  if (usersData) {
    users = JSON.parse(usersData).users;
  }
  users.push(user);
  const data = {
    users: users
  };

  fs.writeFile(usersFile, JSON.stringify(data), (err) => {
    if (err) throw err;
    console.log('Data user berhasil disimpan!');
    res.send('Data user berhasil disimpan!');
  });
});

module.exports = router