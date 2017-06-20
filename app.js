function populate() {
  if (quiz.isEnded()) {
    showScores();
  } else {
    // show questions
    let element = document.getElementById("question");
    element.innerHTML = quiz.getQuestionIndex().text;

    // show choices
    const choices = quiz.getQuestionIndex().choices;
    choices.forEach(function (choice, index) {
      const element = document.getElementById("choice" + index);
      element.innerHTML = choices[index];
      guess("btn" + index, choices[index]);
    })
    showProgress();
  }
};

function guess(id, guess) {
  const button = document.getElementById(id);
  button.onclick = function () {
    quiz.isCorrect(guess);
    populate();
  }
};

function showProgress() {
  const currentQuestionNumber = quiz.questionIndex + 1;
  const element = document.getElementById("progress");
  element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
  let gameOverHtml = "<h1>Result</h1>";
  gameOverHtml += "<h2 id='score'>Your score is: " + quiz.score + "</h2>";
  const element = document.getElementById("quiz");
  element.innerHTML = gameOverHtml;
};

const questions = [
  new Question("Which name do I like best of these four?", ["Oyinkan", "Damilola", "Suliyat", "Yemi"], "A"),
  new Question("Which language is referred to as the language of the web?", ["Python", "Laravel", "PHP", "Javascript"], "D"),
  new Question("Which of these TV shows is my best?", ["Fringe", "The Blacklist", "24", "Lost"], "C"),
  new Question("Which of these options did I major in during my postgraduate degree?", ["Control", "Solid State", "Power", "Communication"], "B"),
  new Question("Who amongst this was my first crush?", ["Ibukunoluwa", "Oluwatosin", "Oyinkansola", "Opeyemi"], "B"),
  new Question("Who am I super fond of at the moment?", ["Lily", "Abike", "Toyosi", "Folake"], "A"),
];

const quiz = new Quiz(questions);

populate();


