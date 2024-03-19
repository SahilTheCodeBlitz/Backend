// const readline = require('node:readline');
// const { stdin: input, stdout: output } = require('node:process');

// const rl = readline.createInterface({ input, output });

// rl.question('What do you think of Node.js? ', (answer) => {
//     console.log(`Thank you for your valuable feedback: ${answer}`);
//     rl.close();
// });

// // Asking for the user's name
// const rll = readline.createInterface({ input, output });
// rll.question('What is your good name? ', (answer) => {
//     console.log('Your good name is:', answer);
//     rll.close();
// });
// this code gives error as only second quesion is visisble this is because
// before closing first we arre executing second rll 
// fixed code

const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

rl.question('What do you think of Node.js? ', (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);
    rl.close();

    // Asking for the user's name after closing the first question
    const rll = readline.createInterface({ input, output });
    rll.question('What is your good name? ', (nameAnswer) => {
        console.log('Your good name is:', nameAnswer);
        rll.close();
    });
});
