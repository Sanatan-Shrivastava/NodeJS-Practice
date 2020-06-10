const http = require('http');
const path = require('path');
const fs = require('fs');
const server = http.createServer((req, res) => {
    // if(req.url == '/') {

    //     fs.readFile(
    //         path.join(__dirname, '/public', 'index.html'),
    //         (err, data) => {
    //             if(err) throw err;
    //             res.writeHead(200, { 'Content-Type': 'text/html'})
    //             res.end(data);
    //     })
        
    // }
    // if(req.url == '/about') {

    //     fs.readFile(
    //         path.join(__dirname, '/public', 'about.html'),
    //         (err, data) => {
    //             if(err) throw err;
    //             res.writeHead(200, { 'Content-Type': 'text/html'})
    //             res.end(data);
    //     })
        
    // }


    // if(req.url == '/api/users') {
    //     const users = [
    //         {name : 'Sanatan Shrivastava', age: '22', college: 'Caltech University', visa : 'i-20'},
    //         {name : 'Swarnima Shrivastava', age: '32', college: 'New York University', visa : 'AMZN-GreenCard'}
    //     ];
    //     res.writeHead(200, { 'Content-Type' : 'Application/json'});
    //     res.end(JSON.stringify(users));
        
    // }
    // WE CAN USE EXPRESS TO MAKE THIS KIND OF SERVER, BUT THIS IS JUST USING NODE TO MAKE A WEB SERVER
    // Although it is not very effective, hence we should use express;



    // Lets build dynamic file path:
    let filePath = path.join(
        __dirname, 'public',
         req.url == '/' ? 'index.html' : req.url
    );
    console.log(filePath);









});
const PORT = process.env.PORT || 8080;    // environment variable, if not then 8080
server.listen(PORT, () => {
    console.log(`[Status] Server is in startup on SLICK_40 ${PORT}`);
});