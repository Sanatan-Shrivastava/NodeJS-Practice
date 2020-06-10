const http = require('http');


// server object
http.createServer((req, res) => {
    res.write('Hello World!');
    res.end();
})
.listen(8000, () => console.log('Server is in startUp'));