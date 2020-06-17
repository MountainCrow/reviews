const mongoose = require('mongoose');
//sets mydb name to 'fec'
mongoose.connect('mongodb://localhost/fec', {useNewUrlParser: true});

mongoose.connection.once('open', function(){
  console.log('Database Connected')
});

mongoose.connection.on('error', console.error.bind(console, 'Connection Error'));



