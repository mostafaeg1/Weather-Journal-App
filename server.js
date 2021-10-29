// Setup empty JS object to act as endpoint for all routes
projectData = [];
const port=8000;
// Require Express to run server and routes
const express= require('express');

// Start up an instance of app
const app=express();
/* Middleware*/
const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser')
// app.use(bodyParser());
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const server = app.listen(port, ()=>{console.log(`running on localhost: ${port}`)})


app.get('/all', function (req, res) {
  res.send('hello world');
  console.log("asd");
})


// app.get('/', function (req, res) {
//     res.send(projectData);
//   })

  app.post('/', function (req, res) {

    // let newEntry={
    //     temperature: req.body.temperature,
    //     date: req.body.date,
    //     userresponse:req.body.userresponse
    // }
    // projectData.push(newEntry);
    console.log(req.body);
  })
