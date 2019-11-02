const express = require('express');
var rp = require('request-promise');

const app = express();
const url = 'https://registry.npmjs.org/';




app.get('/api/packages/:packageName/:packageVersion', (req, res) => {


  rp(url + req.params.packageName + '/' + req.params.packageVersion)

    .then(function (response) {
      res.send(response);
    })
    .catch(function (err) {
      console.log(err)
    });
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);