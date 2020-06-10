// console.log("Hello from Node.JS");
// const Person = require('./person');       // common JS method.
// import Person from './person' - this requires babel, is not currently in Node || ES6 method.
// const greeting = new Person('Sanatan', 20);

// greeting.greet();


const Logger = require('./logger');

const logger = new Logger(); // logger is a class so we need to instantiate;

logger.on('message', (data) => {
    console.log('Called Listener: ', data);        // ${data} would have been used for object;
})
logger.log('Hi Sanatan');
logger.log('Hi Kanchi');
logger.log('Hi Kevin');
logger.log('Hi Cynthia');