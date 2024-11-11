const http = require('http')
const server = http.createServer((req, res) => {
    console.log(req)
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ "message": "All Good " }))
})
server.listen(4000, () => {
    console.log('Server Started')
})
console.log('End')