class Sentence {
  constructor(text) {
    this.text = text;
  }

  lengthOfSentence(text) {
    const formedArray = text.split(' ');
    return formedArray.length
  }
}

// class Question inherits some of the features of class Sentence
class Question extends Sentence {
  constructor(text, choices, answer) {
    super(text);
    this.choices = choices;
    this.answer = answer;
  }

  // A method defined on the parent class is redefined here.
  // Fact that method exists on both classes (howbeit meaning different things) points to polymorphism
  lengthOfSentence(text) {
    const formedArray = [...text];
    return formedArray.length
  }

  correctAnswer(choice) {
    return choice === this.answer;
  }

  typeOfSentence(text) {
    if (text[text.length - 1] === '.') {
      console.log('This is a fact');
    } else if (text[text.length - 1] === '?') {
      console.log('This is a question');
    } else if (text[text.length - 1] === '!') {
      console.log('This is bewildering');
    } else {
      console.log('I do not know what this is');
    }
  }

  // This is a mock of what overloading would look like in Javascript. Result dependent on input parameter(s)
  multiTypeFunc(param) {
    if(typeof param == 'string') {
        alert("I got a string type parameter!!");
    } else if(typeof param == 'number') {
        alert("I got a number type parameter!!");
    } else if(typeof param == 'boolean') {
        alert("I got a boolean type parameter!!");
    } else if(typeof param == 'object') {
        alert("I got a object type parameter!!");
    } else{
        alert("error : the parameter is undefined or null!!");
    }
  }
}

