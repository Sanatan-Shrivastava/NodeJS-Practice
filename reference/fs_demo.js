// file system module:

const fs = require('fs');
const path = require('path');

// Create a folder:
// fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
//     if(err){
//         throw err;
//     }
//     console.log('Folder is in startup');
// }); // by default asynchronous; takes a callback function; used in most cases.


// Create and write to file:
// fs.writeFile(path.join(__dirname, '/test', 'hey.txt'), 'Hello from the Node World!', {}, err => {
//     if(err) {
//         throw err;
//     }
//     console.log('File written and created');

//     // File Append:

//     fs.appendFile(
//         path.join(__dirname, '/test', 'hey.txt'),
//         'I love Node.JS!',
//         {}, err => {
//         if(err) {
//             throw err;
//         }
//         console.log('File written and created');
//     });
// });

// 1) overwrites the initially written lines.
// 2) use 'append' to join the fs.writeFile more than one time and to write more than one line in a file.


// Read File:
// fs.readFile('/etc/passwd', (err, data) => {
//     if (err) throw err;
//     console.log(data);
//     });


// always include the character encoding:

// fs.readFile(path.join(__dirname, '/test', 'hey.txt'), 'utf8', (err, data) => {
//     if(err) throw err;
//     console.log(data);
// })


// Rename the file:

fs.rename(
    path.join(__dirname, '/test', 'hey.txt'),
    path.join(__dirname, '/test', 'hey_renamed.txt'),
    err => {
    if(err) throw err;
    console.log('File renamed');
});



