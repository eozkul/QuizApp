const quizData = [  
  {  
  question: "Aşağıdaki Mısır piramidlerinden hangisi en büyüktür?",  
  a: "Mikerinos Piramidi",
  b: "Sfenks Piramidi",  
  c: "Kefren Piramidi",  
  d: "Rami Piramidi",  
  correct: "c",  
  },  
  {  
  question: "Aşağıdakilerden hangisi Kanada'nın resmi dillerinden birisidir?",  
  a: "İtalyanca",  
  b: "Almanca",  
  c: "Fransızca",  
  d: "Korece",  
  correct: "c",  
  },  
  {  
  question: "Avrupa Birliği'nin başkenti neresidir?",  
  a: "Berlin",  
  b: "Lüksemburg",  
  c: "Brüksel",  
  d: "Hiçbiri",  
  correct: "c",  
  },  
  {  
  question: " Dünyanın en fazla 1000 yıllık bir ömrü kaldığı teorisinin öne süren Kıyamet teorisi kime aittir?",  
  a: "Stephen Hawking",  
  b: "John Maynard Keynes",  
  c: "John Forbes Nash",
  d: "Hiçbiri",  
  correct: "a",  
  },  
];  

const quiz = document.getElementById("quiz");  
const answerElements = document.querySelectorAll(".answer");  
const questionElement = document.getElementById("questions");  
const a_text = document.getElementById("a_text");  
const b_text = document.getElementById("b_text");  
const c_text = document.getElementById("c_text");  
const d_text = document.getElementById("d_text");  
const submitButton = document.getElementById("submit");  

let currentQuiz = 0;  
let score = 0;  

const deselectAnswers = () => {  
  answerElements.forEach((answer) => (answer.checked = false));  
};  

const getSelected = () => {  
  let answer;  
  answerElements.forEach((answerElement) => {  
  if (answerElement.checked) answer = answerElement.id;  
  });  
  return answer;  
};  

const loadQuiz = () => {  
  deselectAnswers();  
  const currentQuizData = quizData[currentQuiz];  
  questionElement.innerText = currentQuizData.question;  
  a_text.innerText = currentQuizData.a;  
  b_text.innerText = currentQuizData.b;  
  c_text.innerText = currentQuizData.c;  
  d_text.innerText = currentQuizData.d;  
  showProgress();
};  

loadQuiz();  

submitButton.addEventListener("click", () => {  
  const answer = getSelected();  
  if (answer) {  
      if (answer === quizData[currentQuiz].correct) score++;  
      currentQuiz++;  
      if (currentQuiz < quizData.length) loadQuiz();  
      else {  
          quiz.innerHTML = `  
          <h2>${quizData.length} sorudan ${score} tanesini bildin.</h2>  
          <button onclick="history.go(0)">Baştan Başla</button>  
          ` 
      }  
  }  
}); 
function showProgress(){
var questionNumber=currentQuiz+1;
var totalQuestion=quizData.length;
document.querySelector('#progress').innerHTML=questionNumber+'of'+ totalQuestion;
}