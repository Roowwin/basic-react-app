
// Express
let express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//API routes
let apiRoutes = require("./api/route")




//Starting  App
let app = express();

//Assigning port
var port = process.env.PORT || 5000;

//configure bodyparser to hande the post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());



//Using api route.
app.use('/api', apiRoutes);

//Using view route 
app.use(express.static(path.join(__dirname, "client/build")));

app.get('*' , function(req,res){
    var currentPath = path.join(__dirname, "client/build", "index.html");
    res.sendFile(currentPath);
});


// Including api route
app.get('/', (req, res) => res.send('Welcome to Express'));


// Launch app to the specified port
app.listen(port, function() {
    console.log("Running Program on Port "+ port);
})