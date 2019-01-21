const questions = [
    {
        question: "What is Athena's favorite animal?",
        options: ["jellyfish", "penguins", "otters"],
        answer: "otters"
    },
    {
        question: "What is 10 + 10?",
        options: ["8", "20", "28", "30"],
        answer: "20"
    }
];

let question_number = 0;
let correct = 0;
let color;

document.addEventListener("DOMContentLoaded", () => {
    load_question();
});

function load_question() {
    if (question_number < questions.length){
      document.querySelector("#reset").style.display = "none"
      document.querySelector("#question").innerHTML = questions[question_number].question;
      document.querySelector("#correct").innerHTML = get_correct();
      const options = document.querySelector("#options");
      options.innerHTML = "";
      for (const option of questions[question_number].options) {
          options.innerHTML += `<button class="option">${option}</button>`;
      }

      document.querySelectorAll(".option").forEach(option => {
          option.onclick = () => {
            if (option.textContent === questions[question_number].answer) {
              correct ++;
            }
            question_number++;
            load_question();
          };

      });
    } else {
      document.querySelector("#question").innerHTML = "You have reached the end of the quiz!";
      const options = document.querySelector("#options");
      let color = get_color();
      options.innerHTML = `<h2 style=\"color:${color}\">You got a score of `+get_correct()+"</h2>";
      document.querySelector("#correct").innerHTML = ""
      document.querySelector("#reset").style.display = "inline"
    }
}

function get_correct() {
  return "Questions correct: "+`${correct} of ${question_number}`
}

function get_color() {
  if (correct/question_number >= 0 && correct/question_number <= 1/3) {
    return "red"
  } else if (correct/question_number > 1/3 && correct/question_number <= 2/3) {
    return "yellow"
  } else {
    return "green"
  }
}

function reset() {
  correct = 0;
  question_number = 0;
  load_question();
}
