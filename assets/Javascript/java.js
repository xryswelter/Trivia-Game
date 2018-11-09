// // Global Variables
// let win = 0;
// let loss = 0;
// let notClicked = 0;
// let resultArray = [];

// $(document).ready(function() {
//   function endGame() {
//     //now comparing resultArray to correctArray
//     for (let i = 0; i < correctArray.length; i++) {
//       if (resultArray[i] === null) {
//         notClicked++;
//         console.log("they did not answer question " + i);
//         console.log("NC" + notClicked);
//       } else if (resultArray[i] === correctArray[i]) {
//         win++;
//         console.log("wins" + win);
//       } else if (resultArray[i] !== correctArray[i]) {
//         loss++;
//         console.log("losses" + loss);
//       }
//     }

//     // Updating results
//     $(".result").text("You got " + win + " answers of 3 questions correct");
//     $(".wins").text("Wins: " + win);
//     $(".loss").text("Losses: " + loss);
//     $(".notClicked").text("Not Clicked: " + notClicked);
//     //Functions to show results
//     discapear();
//   }

//   function discapear() {
//     console.log("stop");
//     //switch quiz from showing to invisible
//     let disappear = $(".quiz");
//     disappear.css("display", "none");
//     // if (disappear.data() === 'show') {
//     //     disappear.css('display', "none");
//     // } else {
//     //     disappear.css('display', "block");
//     // }
//     //switch result from invisible to showing
//     let appear = $(".results");
//     appear.css("display", "block");
//     clearInterval(timer);
//   }
//   // document.getElementById('timer').innerHTML(0 + ':' + 10)
//   //Time Function
//   let time = 11;
//   let timing = function() {
//     console.log("foo");

//     time--;
//     $("#timer").html("Time remaining is: " + time);
//     console.log(time);
//     if (time === 0) {
//       resultArray.push(answer1, answer2, answer3);
//       //doublecheck ^_^
//       console.log(resultArray);
//       console.log("time is zero");
//       endGame();
//       clearInterval(timer);
//       return;
//     }
//   };
//   let timer = setInterval(timing, 1000);

//   console.log(timer);
// }

let questionArray = [
  {
    value: 0,
    question: "What is the definition for resolution?",
    answers: [
      "The shortest distance between two items observed",
      "The number of pixels on a display",
      "The observable difference between two differnt objects",
      "Clarity of a monitor image"
    ],
    correctAnswer: "The observable difference between two differnt objects"
  },
  {
    value: 1,
    question:
      "What is the short hand command to send a committed file to a github repository?",
    answers: ["git pull", "git push", "git clone", "git add ."],
    correctAnswer: "git push"
  },
  {
    value: 2,
    question: "What does RAM mean?",
    answers: [
      "Really Annoying Mother",
      "Remote Access Memory",
      "Random Access Memory",
      "Rude Annoying Mistakes"
    ],
    correctAnswer: "Random Access Memory"
  },
  {
    value: 3,
    question: "Which is not a front-end framework?",
    answers: ["Bootstrap", "Pure", "Material UI", "Firebase"],
    correctAnswer: "Firebase"
  },
  {
    value: 4,
    question: "What is the best electro conductive metal?",
    answers: ["Silver", "Gold", "Copper", "Platinum"],
    correctAnswer: "Silver"
  },
  {
    value: 5,
    question:
      "In the Cherry MX series, which color keyboard switch is the loudest?",
    answers: ["Blue", "Red", "Brown", "Black"],
    correctAnswer: "Blue"
  },
  {
    value: 6,
    question: "Who is the first trillion dollar company in 2018?",
    answers: ["Apple", "Amazon", "Ebay", "Walmart"],
    correctAnswer: "Apple"
  },
  {
    value: 7,
    question: "What is the name of the pomeranian facebook sensation?",
    answers: ["Spud McKenzy", "Boo", "Spot", "Benji"],
    correctAnswer: "Boo"
  }
];
let newArray = [];
let array = [0, 1, 2, 3, 4, 5, 6, 7];
$(document).ready(function() {
  start();
});

// let array = [];
// // console.log(array.length)
// let newArray = [];
let value = 0;

function start() {
  arrayNumbers();
  createRandomArray();
  createQuestions();
}

function arrayNumbers() {
  for (let i = 0; i < questionArray.length; i++) {
    array.push(i);
  }
}

function createRandomArray() {
  let m = 0;
  while (m < questionArray.length) {
    let num = randomNum();
    console.log(num);
    let arrayNum = array[num];
    console.log(`arrayNUm ${arrayNum}`);
    newArray.push(arrayNum);
    console.log(newArray);
    m++;
  }
}

function randomNum() {
  value = Math.floor(Math.random() * 8);
  console.log(value);
  if (newArray.includes(value)) {
    randomNum();
  }
  return value;
}

function createQuestions() {
  newArray.forEach(values => {
    let p = document.createElement("p");
    let ul = document.createElement("ul");
    let answer = [];
    for (let l = 0; l < 4; l++) {
      let input = document.createElement("input");
      input.classList.add(`${values}`);
      input.setAttribute("type", "radio");
      input.setAttribute("value", `questionArray[${values}].answers[${l}]`);
      input.setAttribute("name", `question[${l}]`);
      input.innerHTML = `${questionArray[values].answers[l]}`;
      answer.push(input);
    }

    p.classList.add("question");
    p.setAttribute("value", `questionArray[${values}].value `);
    ul.appendChild(answer);
    $("#form").append(p, ul);
  });
}

{
  /* <div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
  <label class="form-check-label" for="exampleRadios1">
    Default radio
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
  <label class="form-check-label" for="exampleRadios2">
    Second default radio
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled>
  <label class="form-check-label" for="exampleRadios3">
    Disabled radio
  </label>
</div> */
}
