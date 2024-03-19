// accessing arguments passed through cmd while running node app

// using process

// in terminal = node argument1.js name=sahil age=34 samuel

console.log(process.argv);

console.log('arguments are = ',process.argv.slice(2));
// o.p = arguments are =  [ 'name=sahil', 'age=45', 'samuel' ]
console.log(object);