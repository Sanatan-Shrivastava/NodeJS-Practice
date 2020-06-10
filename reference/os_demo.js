const os = require('os');

// Get the platform:
console.log(os.platform());

// CPU arch:
console.log(os.arch());

//CPU core info:
console.log(os.cpus());

// Memory info:
console.log('Free Memory:' + os.freemem());
console.log('Total Memory:' + os.totalmem());

// Home dir:
console.log(os.homedir());

// Up time:
console.log(os.uptime() + ' seconds');