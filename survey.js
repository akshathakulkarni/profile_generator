const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (answer1) => {
  rl.question('What is an activity you like doing? ', (answer2) => { 
    rl.question('What do you listen to while doing that? ', (answer3) => {
      rl.question('Which meal is your favorite? ', (answer4) => {
        rl.question('What is your favorite thing to eat for that meal? ', (answer5) => {
          rl.question('What sport is your absolute favorite? ', (answer6) => {

            console.log(`${answer1} loves ${answer2} and likes to ${answer3}. ${answer4} is her/his favorite part of meal and she/he likes to eat ${answer5}. Her/his favorite sport is ${answer6}.`);

          rl.close();
          });
        });
      });
    });
  });
});





