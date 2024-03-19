// accessing envrionment variables through .env files

// NPM INSTALL DOTENV

require("dotenv").config();

console.log(process.env.NAME);
console.log(process.env.COURSE);
console.log('I am = ',process.env.PROFESSION);

