const express = require('express');
const app = express();
const router = require('./server'); 
const ejs = require('ejs');
const port = 3000;
app.use(express.static('public'))

app.use(router);
app.set('view engine', 'ejs')
app.listen(3000, () => {
  console.log(`server berjalan pada port ${port}`);
});