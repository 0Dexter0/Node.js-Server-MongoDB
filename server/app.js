const express = require('express');
const config = require('config');
const app = express();
const port = config.get('port');
const uri = config.get('mongoUri');
const mongoose = require('mongoose');
app.use('/users', require('./routes/user.routes'));
app.use('/requests', require('./routes/request.routes'));
const start = async () => {
  try{

    await mongoose.connect(uri,{
      useNewUrlParser:true,
      useUnifiedTopology:true,
      useCreateIndex:true
    });
    app.listen(port, () => console.log(`Example app listening on port ${port}!`))
  } catch (err) {
    process.exit(1);
    throw new Error(err);
  }
};
start();
