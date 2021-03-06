const express = require("express");
const fileController = require("./fileController");
const filename = "test.txt";

let app = express();

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'pug');
app.set('views', __dirname + '/public');

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});


app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/public/about.html');
});


app.get('/read', (req, res) => {
  fileController.readFile(filename, (data) => {
    res.render('read', {
      header: 'Content of ' + filename,
      content: data
    })
  });
});

app.get('/help', (req, res) => {
  res.sendFile(__dirname + '/public/help.html');
});

app.listen(6969, () => {
  console.log("Server is up");
});
