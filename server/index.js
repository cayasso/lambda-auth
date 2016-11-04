var express = require('express')
var app = express();

app.get('/callback', function (req, res) {
  console.log(req.query);
  res.json(req.query)
})

app.get('/', function (req, res) {
  res.json({ ok: true })
})

app.listen(8585, function (err) {
  if (err) console.log(err)
  else console.log('listening at port', 8585)
})
