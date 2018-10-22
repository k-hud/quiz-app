$(function() {

var question = "";
var choiceOne = "";
var choiceTwo = "";
var choiceThree = "";
var choiceFour = "";
var questionArray = [];

let rightAnswers = 0;
let wrongAnswers = 0;

var currentStateStore = userAnswerStore.length;
var currentQuestionNumber = userAnswerStore.length + 1;

// function displayInstructions() {
//   $('.js-question-container').html(`
//     <ul class="instructions-list">
//         <li>We'll ask you 10 questions, one after the other.</li>
//         <li>You answer them to the best of your ability.</li>
//         <li>We'll know if you cheat, we've turned on your computer camera. (Just kidding.)</li>
//         <li>If you get one wrong, we'll tell you. If you get it right, kudos!</li>
//         <li>At the end, we'll give you a score, out of 10.</li>
//     </ul>`);
// }

function countRightArray(array, testAgainst) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] === testAgainst) {
            count++;
        }
    }
    return count;
    rightAnswers = countRightArray(userAnswerStore, "True");
    wrongAnswers = countRightArray(userAnswerStore, "False");
}

function tallyGameResults() {

  rightAnswers = countRightArray(userAnswerStore, "True");
  wrongAnswers = countRightArray(userAnswerStore, "False");
  showScoreProgress(rightAnswers, wrongAnswers);
}

function showScoreProgress(rightAnswers, wrongAnswers) {
  $('.your-score').html(`<p class="results-text">You got: <span class="right-num">${numRight}</span> right answers.</p>
  <p class="results-text">You got: <span class="wrong-num">${numWrong}</span> wrong answers.</p>`);
}

function displayFinalGameResults() {

  $('.results-container').html(`<span class="results-headline">Ok. Here's how you did. Are you nervous?</span>
    <p class="results-text">You got: <span class="right-num">${rightAnswers}</span> right answers.</p>
    <p class="results-text">You got: <span class="wrong-num">${wrongAnswers}</span> wrong answers.</p>`);
  $('.js-results-container').html(`

  `);

  $('.next-button-container').html(`<a href="question.html"><button class="restart-button">Restart</button></a>`);
}

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

function newGoodGif() {
  let yesGif = rightReactionGifs[Math.floor(Math.random()*rightReactionGifs.length)];
  return yesGif;
}

function newBadGif() {
  let badGif = wrongReactionGifs[Math.floor(Math.random()*wrongReactionGifs.length)];
  return badGif;
}

function displayAnswerResults(answer, correctAnswerString) {

    if (currentQuestionNumber < 10) {
      currentQuestionNumber++
    } else {
    currentQuestionNumber = currentQuestionNumber;
}

    if (answer === true) {
        let yesGif = newGoodGif();
        $('.js-responses-container').addClass('js-right-answer');
        $('.js-responses-container').html(`Right! You are a rockstar!<br/>
          Let's keep this train moving by going to question number #${currentQuestionNumber}.`);
        $("img[class='giphy-embed']").attr('src', yesGif);
        $("img[class='giphy-embed']").attr('alt', 'You did great!');
        $('legend').html(`Choose your answer below:`).removeClass('legend-red');
        $("input[type=radio]").attr('disabled', true);
        $("button[class='js-next-button']").toggle();
        $("button[class='js-submit-button']").toggle();

        userAnswerStore.push("True");


      } else {
        let noGif =newBadGif();
        $('.js-responses-container').addClass('js-wrong-answer');
        $('.js-responses-container').html(`No way! That's not it. <br/>
        The correct answer was ${questionStore[currentStateStore].answer}.`);
        $("img[class='giphy-embed']").attr('src', noGif);
        $("img[class='giphy-embed']").attr('alt', 'You did didnt do so hot. Womp Womp.');
          $('legend').html(`Choose your answer below:`).removeClass('legend-red');
        $("input[type=radio]").attr('disabled', true);
        $("button[class='js-next-button']").toggle();
        $("button[class='js-submit-button']").toggle();

        userAnswerStore.push("False");

      }
    }


function checkRightOrWrong (selectedName) {

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
    $('.your-score').html(`<span class="your-score">${rightAnswers}</span> of 10`);

}

function loadQuestions() {

  question = questionStore[currentStateStore].question;
  choiceOne = questionStore[currentStateStore].answer;
  choiceTwo = questionStore[currentStateStore].incorrect1;
  choiceThree = questionStore[currentStateStore].incorrect2;
  choiceFour = questionStore[currentStateStore].incorrect3;

  questionArray.push(choiceOne, choiceTwo, choiceThree, choiceFour);
  questionRandomize(questionArray);

  function questionRandomize(array) {

      let randomArray = array;
      randomArray.sort(function() { return 0.5 - Math.random() });
      }


  choiceOne = questionArray[0];
  choiceTwo = questionArray[1];
  choiceThree = questionArray[2];
  choiceFour = questionArray[3];

}

function setCurrentQuestion() {

    loadQuestions();
    updateNumberCounter();
    pushNextQuestion();
}

function nextQuestion() {


  $("input[type=radio]").attr('enabled', true);
  $('.js-submit-button').html('Submit');

  setCurrentQuestion();
}

function handleStartGame() {

    $("img[class='giphy-embed']").attr('src', defaultGif[0]);
    $("img[class='giphy-embed']").attr('alt', 'Waiting on you');
    // displayInstructions();
    setCurrentQuestion();
    $("button[class='js-next-button']").toggle();


}

$('.js-submit-button').on('click', event => {

    $("input[type=radio]").attr('enabled', false);
    event.preventDefault();
    if ($("input[type=radio]").is(':checked') && $("input[type=radio]").prop('required')) {
      var checkedName = $('input[name=quiz-answer]:checked').siblings().children().html();
      checkRightOrWrong(checkedName, currentStateStore, currentQuestionNumber);
    } else {
      $('legend').addClass('legend-red').html(`Please pick an answer`);
    }


 });

$('.js-next-button').on('click', event => {

    if (userAnswerStore.length === 10) {
      alert('OMG. You made it all the way through. Lets tally up some scores and see how you did. Shall we?');
      $("img[class='giphy-embed']").attr('src', finalGif[0]);
      displayFinalGameResults();
      tallyGameResults();
    } else {

    currentStateStore = userAnswerStore.length;
    questionArray = [];
    loadQuestions();
    countRightArray(userAnswerStore, "True");
    updateNumberCounter();
    pushNextQuestion();
    $('.js-responses-container').removeClass('js-right-answer js-wrong-answer');
    $("input[type=radio]").attr('disabled', false);
    $("img[class='giphy-embed']").attr('src', defaultGif[0]);
    $("form[class='quiz-answer-form']").trigger('reset');
    $("button[class='js-next-button']").toggle();
    $("button[class='js-submit-button']").toggle();
  }
});

$(handleStartGame());

});
