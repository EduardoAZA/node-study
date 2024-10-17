const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Parse the incoming request body
// Install body-parser
app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product', (req, res, next) => {
  res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
})

app.post('/product', (req, res, next) => {  
  //Getting the body for the incoming request 
  console.log(req.body);
  res.redirect('/');
})

app.use('/', (req, res, next) => {
  console.log("In another middleware");
  res.send('<h1>Hello from express</h1>');
})

app.listen(3000);