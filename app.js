'use strict'

const http = require('http')

const PORT = process.env.PORT || 80
const appId = getRandomInt(100000, 1000000)

function handleRequest(request, response){
    let result =
`Node : ${appId}
Remote IP : ${request.socket.remoteAddress}
Local IP : ${request.socket.localAddress}`

    response.end(result);
}

const server = http.createServer(handleRequest)

server.listen(PORT, function(){
    console.log("Listening on ", PORT)
});



/******************** Functions **********************/

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}