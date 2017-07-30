var inquirer = require("inquirer");
var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");

//let user choose which card to enter text
chooseCard();

function chooseCard() {
  inquirer
    .prompt({
      name: "choose",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "Enter Basic Card",
        "Enter Cloze Card"
      ]
    })
    .then(function(answer) {
      switch (answer.choose) {
        case "Enter Basic Card":
          enterBasicCard();
          break;
        case "Enter Cloze Card":
          enterClozeCard();
          break;
      }
    });
}

//user enter text for basic card
function enterBasicCard(){
//get user input
inquirer
  .prompt([
    // text prompt
    {
      type: "input",
      message: "Enter text for the front of the card:",
      name: "front"
    },
    {
      type: "input",
      message: "Enter text for the back of the card:",
      name: "back"
    }
  ])
  .then(function(answers, err) {
    //catch error
    if (err) {
      console.log("error");
    }
    else {
    //create object to attach data
    var BC1 = new BasicCard (answers.front, answers.back);
    console.log("Question: " + BC1.front);
    console.log("Answer: " + BC1.back);
    console.log("------------------------------------------");
    }
  });
}

//user enter text for cloze card
function enterClozeCard(){
inquirer
  .prompt([
    // text prompt
     {
      type: "input",
      message: "Enter text for the question:",
      name: "full_text"
    },
    {
      type: "input",
      message: "Enter cloze to be deleted:",
      name: "cloze_text"
    },
    {
      type: "input",
      message: "Enter partial cloze:",
     name: "partial_text"
    }
  ])
  .then(function(answers, err) {
    //catch error
    if (err) {
      console.log("error");
    } 
    //if cloze is not in full text
    else if (answers.full_text.includes(answers.cloze_text) === false)
    {
      console.log("oops! This doesn't work.");
    }
    else {
      //test captured values
      // console.log(answers.full_text + "----" + answers.cloze_text + "------" + answers.partial_text);

      //create new ClozeCard object
      var CC1 = new ClozeCard(answers.full_text,"");
      //add input to cloze
      CC1.addClozeCard(answers.cloze_text, answers.partial_text, answers.full_text);

      //test CC1 captured object values
      // console.log(CC1);

      console.log("Cloze text: " + CC1.cloze[0].cloze);
      console.log("Partial text: " + CC1.cloze[0].partial);
      console.log("Full text: " + CC1.cloze[0].fullText);

      console.log("------------------------------------------");
    }
  });
}