const repl = require('repl')

// const local = repl.start('$') // har line pe $ ayega

const local = repl.start("*")

local.on('exit',()=>{
    console.log('exiting REPL');// text displyed when we are exiting repl
    process.exit();
})