// questionStore = Array of Objects, each holding the questions in order by index.
// userAnswerStore = Array where we can store the # of the answers that were picked
// rightAnswerStore = Numbers of the correct answers
// wrongReactionGifs = Gifs for wrong answers.
// rightReactionGifs = Gifs for right answers.

var question = ""
var choiceOne = "";
var choiceTwo = "";
var choiceThree = "";
var choiceFour = "";

var currentQuestionNumber = 1;

var pullWhichObject = userAnswerStore.length;

var gameState = 0;

function questionDisplay() {

    return $(`<p>${question}</p>`);

}

function choiceDisplay() {
    const showChoices = $(`
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

   return showChoices;
}


function displayAnswerResults(answer) {

    const currentQuestionRightAnswer = answer;
    console.log(currentQuestionRightAnswer);
    if (currentQuestionNumber < 10) {
      currentQuestionNumber++
    } else {
      currentQuestionNumber = currentQuestionNumber;
    }


    if (answer === true && gameState === 1) {

        $('.js-responses-container').addClass('js-right-answer');
        $('.js-responses-container').html(`Right! You are a rockstar! Let's keep this train moving by going to question number #${currentQuestionNumber}.`);
        $("input[type=radio]").attr('disabled', true);

        userAnswerStore.push("True");
        gameState = 0;
        nextQuestion();
      } else {

        $('.js-responses-container').addClass('js-wrong-answer');
        $('.js-responses-container').html(`No way! That's not it. The correct answer was ${questionStore[pullWhichObject].answer}.`);
        $("input[type=radio]").attr('disabled', true);

        userAnswerStore.push("False");
        gameState = 0;
        nextQuestion();
    }
}

function checkRightOrWrong (pickedName) {

    if (pickedName == questionStore[pullWhichObject].answer) {
        var checkedAnswer = true;
      } else {
        var checkedAnswer = false;
      }

    displayAnswerResults(checkedAnswer);
}

function pushNextQuestion() {

    $('.js-question-container').html(questionDisplay());
    $('.js-form-container').html(choiceDisplay());

    console.log(`userAnswerStore after pushNextQuestion runs is: ${userAnswerStore}`);
}

function submitQuestion(arrayNumber) {
    $('#next-button').on('click', function (event) {
        gameState = 1;
        event.preventDefault();
        var checkedName = $('input[name=quiz-answer]:checked').siblings().html();

        checkRightOrWrong(checkedName);

    });
}



function updateNumberCounter() {

    $('.question-counter').html(`#<span class="question-counter">${currentQuestionNumber}</span> of 10`);
    console.log(`userAnswerStore after updateNumberCounter runs is: ${userAnswerStore}`);
}

function loadQuestions() {
// Note: Need to randomize these before we show them. Later.

    question = questionStore[pullWhichObject].question;
    choiceOne = questionStore[pullWhichObject].answer;
    choiceTwo = questionStore[pullWhichObject].incorrect1;
    choiceThree = questionStore[pullWhichObject].incorrect2;
    choiceFour = questionStore[pullWhichObject].incorrect3;
    console.log(`userAnswerStore after loadQuestions runs is: ${userAnswerStore}`);

}

function setCurrentQuestion() {

    loadQuestions();
    updateNumberCounter();
    pushNextQuestion();
    $('.js-submit-button').html("Submit");
    submitQuestion(pullWhichObject, currentQuestionNumber);
    console.log(`userAnswerStore after setCurrentQuestion runs is: ${userAnswerStore}`);
}

function nextQuestion() {

  $('.js-submit-button').html("Next");

  $('#next-button').on('click', function (event) {

      $("input[type=radio]").attr('enabled', true);
      $('.js-responses-container').empty();
      console.log(`userAnswerStore after Next button is: ${userAnswerStore}`);
      console.log(currentQuestionNumber);
      setCurrentQuestion();

  });


}

function handleStartGame() {
    setCurrentQuestion();
    //Needs to better prep for getting the game underway
    //Need to clear the userAnswerStore
}

$(handleStartGame);
