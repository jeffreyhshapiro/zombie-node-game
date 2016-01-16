  var prompt = require('prompt');
 
  // 
  // Start the prompt 
  // 


  // prompt.start();

  // var user = 100
  // var zombie = 20
  
  var attack = Math.floor(Math.random()*6)
  if (attack== 1 || attack==0){
    console.log("too low")
    attack = 2;
    // return attack;
  }
  console.log(attack)

  //  prompt.get(['username', 'email'], function (err, result) {
  //   // 
  //   // Log the results. 
  //   // 
  //   console.log('Command-line input received:');
  //   console.log('  username: ' + result.username);
  //   console.log('  email: ' + result.email);
  // });