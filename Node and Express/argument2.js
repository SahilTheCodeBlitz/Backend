const minimist= require('minimist'
)
console.log(minimist(process.argv));

console.log('arguments are = ',process.argv.slice(2));

const argNew = minimist(process.argv.slice(2))

console.log(argNew.name);

// when want to pass argument i terminal using minimist
// module pass it like this  = node argument2.js --name=sahil --age=45 --samuel