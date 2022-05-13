// import http 
const express  = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 4040;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/', require('./routes/users'));

app.listen(port, () => {
  console.log(`Server is running on port:${port}`)
});
