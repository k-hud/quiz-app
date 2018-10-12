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
    const showChoices = $(`<li>
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

function displayGameResults() {

}

function shuffleChoices(questionInput) {
    console.log(`Original question set: ${questionInput}`)
    var currentIndex = array.length, temporaryValue, randomIndex;
    
    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
    
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    console.log(questionInput);
    return questionInput;
}


function displayAnswerResults() {

}

// function checkRightOrWrong (pickedAnswer) {
//     console.log(`Answer sent over to be checked: ${pickedAnswer}`);
//     if (pickedAnswer === )   
// }

function pushNextQuestion() {
    $('.js-question-container').html(questionDisplay());
    $('.js-form-container').html(choiceDisplay());
}

function submitQuestion() {
    $('.quiz-answer-form').submit(function (event) {
        event.preventDefault();
        var checkedName = $('input[name=quiz-answer]:checked').siblings().html();
        console.log(`Answer picked: ${checkedName}`);
        // checkRightOrWrong(checkedName);
    });
}

function setCurrentQuestion() {
    const currentQuestionNumber = userAnswerStore.length + 1;
    const pullWhichArray = currentQuestionNumber - 1;
    console.log(`Current question number is: ${pullWhichArray}`);
    console.log(`Current question number is: ${currentQuestionNumber}`);
    const questionsReady = questionStore[currentQuestionNumber - 1];
    console.log(`Current question is: ${questionsReady.question}`);
    loadQuestions(pullWhichArray);
    updateNumberCounter(currentQuestionNumber);
}

function updateNumberCounter(number) {
    console.log(`Number sent over to updateNumberCounter is: ${number}`);
    $('.question-counter').html(`#<span class="question-counter">${number}</span> of 10`);

}

function loadQuestions(questionNumber) {
    console.log(`Question number passed over to get from the store is: ${questionNumber}`);
    console.log(`Question number passed over is the type of: ${typeof questionNumber}`);
    question = questionStore[questionNumber].question;
    choiceOne = questionStore[questionNumber].answer;
    choiceTwo = questionStore[questionNumber].incorrect1;
    choiceThree = questionStore[questionNumber].incorrect2;
    choiceFour = questionStore[questionNumber].incorrect3;

}


function handleStartGame() {
    console.log(`The current Answer Store says: ${userAnswerStore}.`);
    setCurrentQuestion();
    pushNextQuestion();
    submitQuestion();
}

$(handleStartGame);