const express = require('express');
const app = express();
const path = requiere('path');


app.use(express.static(__dirname + '/src/app/'))

app.listen(process.env.PORT || 8080);

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/src/app/app.component.html'));
});
