const quizData = [
  {
    question: "Which Language runs in a browser ?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "Javascript",
    correct: "d",
  },
  {
    question: "What Does CSS stand For ?",
    a: "Central Style Sheet",
    b: "Cascading Style Sheet",
    c: "Cascading Simple Sheet",
    d: "Central Simple Sheet",
    correct: "b",
  },
  {
    question: "What Does HTML stand For ?",
    a: "HyperText Markup Language",
    b: "HyperText Markdown Language",
    c: "HyperLoop Machine Language",
    d: "Helicopter Terminal Motorboat Lamborgini",
    correct: "a",
  },
  {
    question: "What years was javascript launched ?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "None of the bove",
    correct: "b",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEls = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submit = document.getElementById("button");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswer();

  const currentQuizData = quizData[currentQuiz];
  questionEls.innerHTML = currentQuizData.question;
  a_text.innerHTML = currentQuizData.a;
  b_text.innerHTML = currentQuizData.b;
  c_text.innerHTML = currentQuizData.c;
  d_text.innerHTML = currentQuizData.d;
}

function deselectAnswer() {
  answerEls.forEach((answerEls) => (answerEls.checked = false));
}

function getSelected() {
  let answer;
  answerEls.forEach((answerEls) => {
    if (answerEls.checked) {
      answer = answerEls.id;
    }
  });
  return answer;
}

submit.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
            <h2> You answered ${score}/${quizData.length} question correctly</h2>
            <button onclick="location.reload()">Reload</button>
            `;
    }
  }
});
