console.log("Hello World");
var triviaTime = 0;
var rightCount = 0;
var wrongCount = 0;
var questionAnswerCount = 1;

var timer = '';
var questionsAndAnswers = {
     
    1:{
        question: 'Who was the first woman to be inducted into the Rock and Roll Hall of Fame?',
        answers: ['Joan Jett', 'Madonna', 'Aretha Franklin', 'Blondie'],
        correctAnswer: 'Aretha Franklin',
        rightAnswerMessage: 'Correct!',
        wrongAnswerMessage: 'Wrong!',
        imgageURL: '.gif'
    },

    2:{
        question: 'Houses of the Holy is the fifth studio album by which English rock band?',
        answers: ['Led Zepplin', 'Metallica', 'Queen', 'AC/DC'],
        correctAnswer: 'Led Zepplin',
        rightAnswerMessage: 'Correct!',
        wrongAnswerMessage: 'Wrong!',
        imgageURL: '.gif'
    },

    3:{
        question: 'What is the stage name of the member of Public Enemy who would later have a reality dating show?',
        answers: ['Flavor Flav', 'Terminator X', 'Chuck D', 'Professor Griff'],
        correctAnswer: 'Flavor Flav',
        rightAnswerMessage: 'Correct!',
        wrongAnswerMessage: 'Wrong!',
        imgageURL: '.gif'
        
    }
};
console.log(questionsAndAnswers);
var start = function(){
    $('.startBtn').on('click',function(){
        $('.triviaSection').empty();
        createQuestions();
    });
}
// console.log(start);

var createQuestions = function(){
    timerStart();
    var question = questionsAndAnswers[questionAnswerCount]['question'];
    var newDiv = $('<div>');
    newDiv.addClass('question');
    newDiv.text(question);
    $('.triviaSection').append(newDiv);
    createAnswers();
}
console.log(question);

var createAnswers = function(){
    var answersLength = questionsAndAnswers[questionAnswerCount]['answers'].length;
    for(var i = 0; i < answersLength; i++){
        var answers = questionsAndAnswers[questionAnswerCount]['answers'][i];
        var newButton = $('<button>');
        newButton.addClass('answers redButton');
        newButton.attr('data-type', answers);
        newButton.text(answers);
        $('.triviaSection').append(newButton);
    }
    $(document).off('click', '.answers', checkAnswer);
    $(document).on('click', '.answers', checkAnswer);
}
console.log(answers);

