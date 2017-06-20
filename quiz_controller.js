class Quiz {
  constructor(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
  }

  getQuestionIndex() {
    return this.questions[this.questionIndex];
  }

  isEnded() {
    return this.questions.length === this.questionIndex;
  }

  isCorrect(answer) {
    if (this.getQuestionIndex().correctAnswer(answer)) {
      this.score += 1;
    }
    this.questionIndex += 1;
  }
}
