$( document ).ready(function() {

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
        $('.js-next-submit-button').html('Next');
        userAnswerStore.push("True");
        nextQuestion();
        debugger;
      } else {

        $('.js-responses-container').addClass('js-wrong-answer');
        $('.js-responses-container').html(`No way! That's not it. The correct answer was ${questionStore[pullWhichObject].answer}.`);
        $("input[type=radio]").attr('disabled', true);
        $('.js-next-submit-button').html('Next');
        userAnswerStore.push("False");
        nextQuestion();
        debugger;
    }
}

function checkRightOrWrong (selectedName) {

    if (selectedName == questionStore[pullWhichObject].answer) {
        var checkedAnswer = true;
      } else {
        var checkedAnswer = false;
      }
      debugger;
    displayAnswerResults(checkedAnswer);
}

function pushNextQuestion() {

    $('.js-question-container').html(questionDisplay());
    choiceDisplay();

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

}

// function submitListener() {
//
//     $('.js-next-submit-button').on('click', event => {
//
//         event.preventDefault();
//         var checkedName = $('input[name=quiz-answer]:checked').siblings().html();
//
//         checkRightOrWrong(checkedName);
//     });
// }

function nextQuestion() {

  $("input[type=radio]").attr('enabled', true);
  $('.js-next-submit-button').html('Submit');

  setCurrentQuestion();
}


function handleStartGame() {

    setCurrentQuestion();

}

//Submit button listner.
$('.js-submit-button').on('click', event => {

     $("input[type=radio]").attr('enabled', true);
     setCurrentQuestion();

 });

//Next button listner.
$('.js-next-button').on('click', event => {

  console.log('Next button clicked');

});


$(handleStartGame);


});
