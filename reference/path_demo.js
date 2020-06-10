const path = require('path');


// Basename - get the base filename
console.log(path.basename(__filename));


// Get the Directory Name:
console.log(path.dirname(__filename));


// returns the File Extension
console.log(path.extname(__filename));

// Create path object
console.log(path.parse(__filename).base);

// Concatenate paths - use JOIN for this.
console.log(path.join(__dirname, 'test', 'hello.html'));