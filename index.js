const express = require('express'); 
const home = require('./app/routers/barang.routes'); 
  
const app = express(); 
  
app.use(home); 


app.listen(process.env.PORT || 8080);

