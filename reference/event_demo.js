const EventEmitter = require('events');


//Create an emitter class
class MyEmitter extends EventEmitter {}

// Init class emitter object

const myEmitter = new MyEmitter();

//Event Listener:

myEmitter.on('event', () => {
    console.log('Event is in Start UP;')
});

// Init event;
myEmitter.emit('event'); // - will fire as much as time as the event is emitted.

