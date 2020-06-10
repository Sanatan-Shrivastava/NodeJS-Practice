const url = require('url');

const my_url = new URL('https://www.instagram.com:8000/sanatanshrivastava?id=100&status=active');

//Serialized URL
console.log(my_url.href);
console.log(my_url.toString());

// get host doamin();
console.log(my_url.host); // get port too;

// get hostname:
console.log(my_url.hostname); // does not get port;

//Pathname:
console.log(my_url.pathname);
  
//Serialized query:
console.log(my_url.search);

//Params object: // to create object of query:
console.log(my_url.searchParams);

//add params:
my_url.searchParams.append('abc', '123');
console.log(my_url.searchParams);

//loop through params:
my_url.searchParams.forEach((value, name) => {
    console.log(`${name}: ${value}`);
});