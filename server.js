
// Express
let express = require('express')

//API routes
let apiRoutes = require("./api/route")

//View routes
let viewRoute = require("./view/index")


//Starting  App
let app = express();

//Assigning port
var port = process.env.PORT || 8080;

//configure bodyparser to hande the post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());



//Using api route.
app.use('/api', apiRoutes);

//Using view route 
app.use('/' , viewRoute);


// Including api route
app.get('/', (req, res) => res.send('Welcome to Express'));


// Launch app to the specified port
app.listen(port, function() {
    console.log("Running Program on Port "+ port);
})