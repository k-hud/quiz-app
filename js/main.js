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

function questionDisplay() {

    const showQuestion = $(`<p>${question}</p>`);

    return showQuestion;
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


function nextButtonReset(currentQuestionNumber) {

        $('.js-submit-button').html("Next");

        $('#next-button').on('click', function (event) {

            $('.js-responses-container').html(` `);
            return setCurrentQuestion();

        });
}

function displayAnswerResults(answer, currentQuestionNum, ) {

    const currentQuestionRightAnswer = answer;

    if (answer === true) {

        $('.js-responses-container').addClass('js-right-answer');
        $('.js-responses-container').html(`Right! You are a rockstar! Let's keep this train moving by going to question number #${currentQuestionNum + 1}.`);

        userAnswerStore.push("True");
      } else if (answer === false) {

        $('.js-responses-container').addClass('js-wrong-answer');
        $('.js-responses-container').html(`No way! That's not it. The correct answer was ${answer}.`);

        userAnswerStore.push("False");
    }

    nextButtonReset(currentQuestionNum);
}

function checkRightOrWrong (pickedName, pickedAnswer, currentQuestionNum) {

    if (pickedName == questionStore[pickedAnswer].answer) {
        var checkedAnswer = true;
      } else {
        var checkedAnswer = false;
      }

    displayAnswerResults(checkedAnswer, currentQuestionNum);
}

function pushNextQuestion() {

    $('.js-question-container').html(questionDisplay());
    $('.js-form-container').html(choiceDisplay());
}

function submitQuestion(arrayNumber, currentQuestionNum) {
    $('.quiz-answer-form').submit(function (event) {

        event.preventDefault();
        var checkedName = $('input[name=quiz-answer]:checked').siblings().html();
        const arrayToCheck = arrayNumber;

        checkRightOrWrong(checkedName, arrayToCheck, currentQuestionNum);

    });
}

function setCurrentQuestion() {

    const currentQuestionNumber = userAnswerStore.length + 1;
    const pullWhichArray = currentQuestionNumber - 1;
    const questionsReady = questionStore[currentQuestionNumber - 1];

    $('.js-submit-button').html("Submit");
    loadQuestions(pullWhichArray);
    updateNumberCounter(currentQuestionNumber);
    pushNextQuestion();
    submitQuestion(pullWhichArray, currentQuestionNumber);
}

function updateNumberCounter(number) {

    $('.question-counter').html(`#<span class="question-counter">${number}</span> of 10`);
}

function loadQuestions(questionNumber) {
// Note: Need to randomize these before we show them. Later.

    question = questionStore[questionNumber].question;
    choiceOne = questionStore[questionNumber].answer;
    choiceTwo = questionStore[questionNumber].incorrect1;
    choiceThree = questionStore[questionNumber].incorrect2;
    choiceFour = questionStore[questionNumber].incorrect3;

}

function nextQuestion() {
  // Clear anything?
  //Push the next question
  //Reset the button to say submit
  //Reset the GIF
  //Update the number counter
}

function handleStartGame() {
    setCurrentQuestion();
    //Needs to better prep for getting the game underway
    //Need to clear the userAnswerStore
}

$(handleStartGame);
