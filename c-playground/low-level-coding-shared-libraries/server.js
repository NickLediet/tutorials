const http = require('http')
const PORT = process.env.PORT || 8080

const server = http.createServer()

server.addListener('request', (req, res) => {
    console.log(`A connection has been made!`)
})

server.listen(PORT, () => {
    console.log(`Server is listening for HTTP Traffic on localhost:${PORT}`);
})