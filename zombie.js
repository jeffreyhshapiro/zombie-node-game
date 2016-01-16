  var prompt = require('prompt');
 
  // 
  // Start the prompt 
  // 


  prompt.start();
  var randomNumber = (Math.floor(Math.random()*10)+1) ;
    console.log(randomNumber)

  // var user = 100
  // var zombie = 20
  
  var attack = Math.floor(Math.random()*6)
  if (attack== 1 || attack==0){
    // console.log("too low")
    attack = 2;
    // return attack;
  }

   prompt.get(['number'], function (err, result) {

    if (result.number == randomNumber) {
      console.log("mathing numbers")
    }
    else {
      console.log('poopin not matching')
    }
  //   console.log('Command-line input received:');
    console.log('  username: ' + result.number);
  //   console.log('  email: ' + result.email);
  });