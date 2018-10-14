// questionStore = Array of Objects, each holding the questions in order by index.
// userAnswerStore = Array where we can store the # of the answers that were picked
// rightAnswerStore = Numbers of the correct answers
// wrongReactionGifs = Gifs for wrong answers.
// rightReactionGifs = Gifs for right answers.

function resetQuestions() {

      var question = ""
      var choiceOne = "";
      var choiceTwo = "";
      var choiceThree = "";
      var choiceFour = "";

}

var currentQuestionNumber = 1;

var pullWhichObject = userAnswerStore.length;

function questionDisplay() {
    $('.js-responses-container').html(` `);
    return $(`<p>${question}</p>`);

}

function choiceDisplay() {
      return $(`
       <li>
         <input type="radio" name="quiz-answer" value="answer-1" id="#choice-one" class="choices">
         <label for="answer-1">${choiceOne}</label>
       </li>

      <li>
       <input type="radio" name="quiz-answer" value="answer-2" id="#choice-two" class="choices">
       <label for="answer-2">${choiceTwo}</label>
      </li>
      <li>
       <input type="radio" name="quiz-answer" value="answer-3" id="#choice-three" class="choices">
       <label for="answer-3">${choiceThree}</label>
      </li>
      <li>
       <input type="radio" name="quiz-answer" value="answer-4" id="#choice-four" class="choices">
       <label for="answer-4">${choiceFour}</label></li>
      </li>   `
       );
}


function displayAnswerResults(answer) {

    const currentQuestionRightAnswer = answer;
    console.log(currentQuestionRightAnswer);
    if (currentQuestionNumber < 10) {
      currentQuestionNumber++
    } else {
      currentQuestionNumber = currentQuestionNumber;
    }


    if (answer === true) {

        $('.js-responses-container').addClass('js-right-answer');
        $('.js-responses-container').html(`Right! You are a rockstar! Let's keep this train moving by going to question number #${currentQuestionNumber}.`);
        $("input[type=radio]").attr('disabled', true);
        $('.js-submit-button').css('visibility','hidden');

        userAnswerStore.push("True");
        nextQuestion();
      } else {

        $('.js-responses-container').addClass('js-wrong-answer');
        $('.js-responses-container').html(`No way! That's not it. The correct answer was ${questionStore[pullWhichObject].answer}.`);
        $("input[type=radio]").attr('disabled', true);
        $('.js-submit-button').css('visibility','hidden');

        userAnswerStore.push("False");
        nextQuestion();
    }
}

function checkRightOrWrong (selectedName) {

    if (selectedName == questionStore[pullWhichObject].answer) {
        var checkedAnswer = true;
      } else {
        var checkedAnswer = false;
      }

    displayAnswerResults(checkedAnswer);
}

function pushNextQuestion() {

    $('.js-question-container').html(questionDisplay());
    $('.js-form-container').html(choiceDisplay());
    debugger;

}

function submitQuestion() {
    $('.js-submit-button').on('click', function (event) {

        event.preventDefault();
        var checkedName = $('input[name=quiz-answer]:checked').siblings().html();

        checkRightOrWrong(checkedName);

    });
}



function updateNumberCounter() {

    $('.question-counter').html(`#<span class="question-counter">${currentQuestionNumber}</span> of 10`);
}

function loadQuestions() {
// Note: Need to randomize these before we show them. Later.

    question = questionStore[userAnswerStore.length].question;
    console.log(`userAnswerStore after loadQuestions runs is: ${question}`);
    choiceOne = questionStore[userAnswerStore.length].answer;
    console.log(`userAnswerStore after loadQuestions runs is: ${choiceOne}`);
    choiceTwo = questionStore[userAnswerStore.length].incorrect1;
    console.log(`userAnswerStore after loadQuestions runs is: ${choiceTwo}`);
    choiceThree = questionStore[userAnswerStore.length].incorrect2;
    console.log(`userAnswerStore after loadQuestions runs is: ${choiceThree}`);
    choiceFour = questionStore[userAnswerStore.length].incorrect3;
    console.log(`userAnswerStore after loadQuestions runs is: ${choiceFour}`);

}

function setCurrentQuestion() {

    loadQuestions();
    updateNumberCounter();
    pushNextQuestion();
    submitQuestion();
}

function nextQuestion() {

  $('.js-next-button').css('visibility','visible');

  $('.js-next-button').on('click', function (event) {
      $("input[type=radio]").attr('enabled', true);
      console.log(`userAnswerStore after Next button is: ${userAnswerStore}`);
      console.log(currentQuestionNumber);
      $('.js-next-button').css('visibility','hidden');
      $('.js-submit-button').css('visibility','visible');
      resetQuestions();
      setCurrentQuestion();

  });


}

function handleStartGame() {
    setCurrentQuestion();
    resetQuestions();
    $('.js-next-button').css('visibility','hidden');
    $('.js-submit-button').css('visibility','visible');
    //Needs to better prep for getting the game underway
    //Need to clear the userAnswerStore
}

$(handleStartGame);
