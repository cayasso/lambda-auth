var request = require('superagent')
exports.handle = function(e, ctx, fn) {
  request
    .post(process.env.API_URL)
    .send({
      client_id: process.env.CLIENT_ID,
      connection: 'email',
      email: e.email,
      send: 'link'
    })
    .end(fn)
}
