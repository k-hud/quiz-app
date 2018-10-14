$( document ).ready(function() {

// questionStore = Array of Objects, each holding the questions in order by index.
// userAnswerStore = Array where we can store the # of the answers that were picked
// rightAnswerStore = Numbers of the correct answers
// wrongReactionGifs = Gifs for wrong answers.
// rightReactionGifs = Gifs for right answers.

let question = "";
let choiceOne = "";
let choiceTwo = "";
let choiceThree = "";
let choiceFour = "";

let currentStateStore = userAnswerStore.length;
let currentQuestionNumber = userAnswerStore.length + 1;

function questionDisplay() {
    $('.js-responses-container').html(` `);
    return $(`<p>${question}</p>`);

}

function choiceDisplay() {

    $("span[id='#choice-one']").html(choiceOne);
    $("span[id='#choice-two']").html(choiceTwo);
    $("span[id='#choice-three']").html(choiceThree);
    $("span[id='#choice-four']").html(choiceFour);
}


function displayAnswerResults(answer, correctAnswerString) {

    //This works.
    if (currentQuestionNumber < 10) {
      currentQuestionNumber++

    } else {
      currentQuestionNumber = currentQuestionNumber;
      console.log(currentQuestionNumber);
    }


    if (answer === true) {

        $('.js-responses-container').addClass('js-right-answer');
        $('.js-responses-container').html(`Right! You are a rockstar! Let's keep this train moving by going to question number #${currentQuestionNumber}.`);
        $("input[type=radio]").attr('disabled', true);
        $("button[class='js-next-button']").toggle();
        $("button[class='js-submit-button']").toggle();

        userAnswerStore.push("True");


      } else {

        $('.js-responses-container').addClass('js-wrong-answer');
        $('.js-responses-container').html(`No way! That's not it. The correct answer was ${questionStore[currentStateStore].answer}.`);
        $("input[type=radio]").attr('disabled', true);
        $("button[class='js-next-button']").toggle();
        $("button[class='js-submit-button']").toggle();

        userAnswerStore.push("False");

      }
  }


function checkRightOrWrong (selectedName) {

    // This works. Checks answer and sends true.
    if (selectedName == questionStore[currentStateStore].answer) {
        var checkedAnswer = true;
      } else {
        var checkedAnswer = false;
      }

    displayAnswerResults(checkedAnswer, selectedName);
}

function pushNextQuestion() {

    $('.js-question-container').html(questionDisplay());
    choiceDisplay();

}

function updateNumberCounter() {

    $('.question-counter').html(`<span class="question-counter">${currentQuestionNumber}</span> of 10`);
}

function loadQuestions() {

  // Note: This is broken. Not updating to the right number/question in the Store.
    console.log(`userAnswerStore says ${userAnswerStore}, currentQuestionNumber says ${currentQuestionNumber}, and currentStateStore says ${currentStateStore}.`);
    question = questionStore[currentStateStore].question;
    console.log(`userAnswerStore after loadQuestions runs is: ${question}`);
    choiceOne = questionStore[currentStateStore].answer;
    console.log(`userAnswerStore after loadQuestions runs is: ${choiceOne}`);
    choiceTwo = questionStore[currentStateStore].incorrect1;
    console.log(`userAnswerStore after loadQuestions runs is: ${choiceTwo}`);
    choiceThree = questionStore[currentStateStore].incorrect2;
    console.log(`userAnswerStore after loadQuestions runs is: ${choiceThree}`);
    choiceFour = questionStore[currentStateStore].incorrect3;
    console.log(`userAnswerStore after loadQuestions runs is: ${choiceFour}`);

}

function setCurrentQuestion() {

    loadQuestions();
    updateNumberCounter();
    pushNextQuestion();
    console.log(`At end of setCurrentQuestion Current state store is: ${currentStateStore}`);
}

function nextQuestion() {

  $("input[type=radio]").attr('enabled', true);
  $('.js-submit-button').html('Submit');

  setCurrentQuestion();
}

//Set which question should come up first/next.
//Status:
function handleStartGame() {

    setCurrentQuestion();
    console.log(`In handleStartGame Current state store is: ${currentStateStore}`);
    $("button[class='js-next-button']").toggle();

}

$('.js-submit-button').on('click', event => {

    $("input[type=radio]").attr('enabled', false);
    event.preventDefault();
    var checkedName = $('input[name=quiz-answer]:checked').siblings().children().html();
    checkRightOrWrong(checkedName, currentStateStore, currentQuestionNumber);

 });

$('.js-next-button').on('click', event => {
  currentStateStore = userAnswerStore.length;
  loadQuestions();
  updateNumberCounter();
  pushNextQuestion();
  $("input[type=radio]").attr('disabled', false);
  $("form[class='quiz-answer-form']").trigger('reset');
  $("button[class='js-next-button']").toggle();
  $("button[class='js-submit-button']").toggle();

});

//Start the game.
//Status: Fine.
$(handleStartGame);


});
