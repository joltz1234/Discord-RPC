const express = require('express');
const server = express();
 
server.all('/', (req, res) => {
  res.send(`RPC Is Ready.`)
})
 
function keepAlive() {
  server.listen(3000, () => { console.log("Server is Ready!!" + Date.now()) });
}
 
module.exports = keepAlive;
