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



function displayGameResults() {

  function countRightArray(array, testAgainst) {
      var count = 0;
      for (var i = 0; i < array.length; i++) {
          if (array[i] === testAgainst) {
              count++;
          }
      }
      return count;
  }

  var numRight = countRightArray(userAnswerStore, "True");
  var numWrong = countRightArray(userAnswerStore, "False");


  $('.results-container').html(``);
  $('.js-results-container').html(`
    <div class="results-show">Ok. Here's how you did. Are you nervous?
      <p>You got: ${numRight} right answers.</p>
      <p>You got: ${numWrong} right answers.</p>
    </div>
  `);
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
  console.log(yesGif);
  return yesGif;
}

function newBadGif() {
  let badGif = wrongReactionGifs[Math.floor(Math.random()*wrongReactionGifs.length)];
  console.log(badGif);
  return badGif;
}

function displayAnswerResults(answer, correctAnswerString) {

    //This works.
    if (currentQuestionNumber < 10) {
      currentQuestionNumber++
    } else {
    currentQuestionNumber = currentQuestionNumber;
}

    if (answer === true) {
        let yesGif = newGoodGif();
        console.log(`Did I send yesGif back over? ${yesGif}`);
        $('.js-responses-container').addClass('js-right-answer');
        $('.js-responses-container').html(`Right! You are a rockstar! Let's keep this train moving by going to question number #${currentQuestionNumber}.`);
        $("img[class='giphy-embed']").attr('src', yesGif);
        $("input[type=radio]").attr('disabled', true);
        $("button[class='js-next-button']").toggle();
        $("button[class='js-submit-button']").toggle();

        userAnswerStore.push("True");


      } else {
        let noGif =newBadGif();
        $('.js-responses-container').addClass('js-wrong-answer');
        $('.js-responses-container').html(`No way! That's not it. The correct answer was ${questionStore[currentStateStore].answer}.`);
        $("img[class='giphy-embed']").attr('src', noGif);
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

    question = questionStore[currentStateStore].question;
    choiceOne = questionStore[currentStateStore].answer;
    choiceTwo = questionStore[currentStateStore].incorrect1;
    choiceThree = questionStore[currentStateStore].incorrect2;
    choiceFour = questionStore[currentStateStore].incorrect3;

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

    if (userAnswerStore.length === 10) {
      alert('OMG. You made it all the way through. Lets tally up some scores');
      displayGameResults();
    } else {

    currentStateStore = userAnswerStore.length;
    loadQuestions();
    updateNumberCounter();
    pushNextQuestion();
    $('.js-responses-container').removeClass('js-right-answer js-wrong-answer');
    $("input[type=radio]").attr('disabled', false);
    $("form[class='quiz-answer-form']").trigger('reset');
    $("button[class='js-next-button']").toggle();
    $("button[class='js-submit-button']").toggle();
  }
});

$(handleStartGame);


});
