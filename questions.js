class Sentence {
  constructor(text) {
    this.text = text;
  }

  lengthOfSentence(text) {
    const formedArray = text.split(' ');
    return formedArray.length
  }
}


class Question extends Sentence {
  constructor(text, choices, answer) {
    super(text);
    this.choices = choices;
    this.answer = answer;
  }

  lengthOfSentence(text) {
    const formedArray = [...text];
    return formedArray.length
  }

  correctAnswer(choice) {
    return choice === this.answer;
  }
}

