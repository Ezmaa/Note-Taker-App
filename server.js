const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;


// creates a route for every file 
app.use(express.static('public'));
// Settting up different ways to parse the data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// routes to the files needed 
require('./routes/pathRoutes')(app);
require('./routes/htmlroute')(app);


// creates connection to the server 
app.listen(PORT, () => {
  console.log(`Server available at localhost${PORT}`);
});