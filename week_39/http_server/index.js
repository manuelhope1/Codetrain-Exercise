const http = require('http');

const infoRun = (req, res) => {
    const url = req.url;
    if (url === "/") {
        res.end("<h1>WELCOME TO MY HOME PAGE</h1>")
    }
    else if (url === "/contact") {
        res.end("<h1>CONTACT US  ON ANY OF OUR NUMBERS</h1>")
    }
    else if (url === "/about") {
        res.end("<h1>OUR HISTORY IS BELOW</h1>")
    }
    else {
        res.end("<h1>ERROR 404</h1>")
    }

}
const server = http.createServer(infoRun);
server.listen(3000, '127.0.0.1', () => console.log('Server is ready to accept requests'))
