//Install express server
const express = require('express');
const path = require('path');

const app = express();


app.use(express.static('./angular-starter'));

app.get('/*', function (req, res) {
  res.sendFile('./dist/angular-starter/index.html');
});
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
