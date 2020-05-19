const express = require('express');
const mongoose = require('mongoose');
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');


const PORT = process.env.PORT || 3001;


// Setup middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"))

 apiRoutes(app);
 htmlRoutes(app);
// require('./services/passport');
// Connect database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false });

app.listen(PORT, function(){
    console.log("App listening on http://localhost:" + PORT);
});
