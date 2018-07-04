// Global Variables
var triviaTime = 0;
var rightCount = 0;
var wrongCount = 0;
var qAndACount = 1;
var timer = '';
var qAndA = {
			1:{
				question:'Who was the first woman to be inducted into the Rock and Roll Hall of Fame?',
				answers:['Joan Jett', 'Madonna', 'Aretha Franklin', 'Blondie'],
				correct:'Aretha Franklin',
				right: 'Correct!',
				wrong: 'Wrong!',
			   },
			2:{
				question:'Houses of the Holy is the fifth studio album by which English rock band?',
				answers:['Led Zepplin', 'Metallica', 'Queen', 'AC/DC'],
				correct:'Led Zepplin',
				right: 'Correct!',
				wrong: 'Wrong!',
			},
			3:{
				question:'What is the stage name of the member of Public Enemy who would later have a reality dating show?',
				answers:['Flavor Flav', 'Terminator X', 'Chuck D', 'Professor Griff'],
				correct:'Flavor Flav',
				right: 'Correct!',
				wrong: 'Wrong!',
            },
            4:{
				question:'Who interrupted Taylor Swifts acceptance speech at the 2009 Video Music Awards?',
				answers:['Lil Wayne', 'Sean "Puffy" Combs', 'Master P', 'Kanye West'],
				correct:'Kanye West',
				right: 'Correct!',
				wrong: 'Wrong!',
            },
            5:{
				question:'Who is the former drummer for Nirvana that went on to become the frontman for the Foo Fighters?',
				answers:['Dave Lombardo', 'Lars Ulrich', 'John Bonham', 'David Grohl'],
				correct:'David Grohl',
				right: 'Correct!',
				wrong: 'Wrong!',
            },
            6:{
				question:'Who is famouse for burning his guitar?',
				answers:['Jimmy Page', 'Keith Richards', 'Jimmy Hendrix', 'Kirk Hammet'],
				correct: 'Jimmy Hendrix',
				right: 'Correct!',
				wrong: 'Wrong!',
            },
            7:{
				question:'Which of the Beatles is barefoot on the Abbey Road album cover?',
				answers:['John Lennon', 'Paul McCartney', 'Ringo Star', 'George Harrison'],
				correct:'Paul McCartney',
				right: 'Correct!',
				wrong: 'Wrong!',
            },
            8:{
				question:'What American punk rock band released their best selling album Dookie in 1994?',
				answers:['Black Flag', 'The Misfits', 'The Offspring', 'Green Day'],
				correct:'Green Day',
				right: 'Correct!',
				wrong: 'Wrong!',
            },
            9:{
				question:'Who was "The King of Rock n Roll"?',
				answers:['Michael Jackson', 'Elvis', 'Prince', 'John Paul Jones'],
				correct:'Elvis',
				right: 'Correct!',
				wrong: 'Wrong!',
            },
            10:{
				question:'Who sang the song "Johnny B. Goode"?',
				answers:['Chuck Berry', 'BB King', 'The Temptations', 'Smokey Robinson'],
				correct:'Chuck Berry',
				right: 'Correct!',
				wrong: 'Wrong!',
			}


	};
// Start Function
var start = function(){
	$('.startBtn').on('click',function(){
		$('.triviaSection').empty();
		createQuestions();
	});
}
var createQuestions = function(){
	timerStart();
	var question = qAndA[qAndACount]['question'];

	var newDiv = $('<div>');
	newDiv.addClass('question');
	newDiv.text(question);
	$('.triviaSection').append(newDiv);
    
    createAnswers();
}


var createAnswers = function(){
	var answerLength = qAndA[qAndACount]['answers'].length;
	for(var i = 0; i < answerLength;i++){
		var answers =qAndA[qAndACount]['answers'][i];
		
		var newBtn = $('<button>');
		newBtn.addClass('answers redBtn');
		newBtn.attr('data-type',answers);
		newBtn.text(answers);
		$('.triviaSection').append(newBtn);
	}
	// Prevents click event from being saved
	$(document).off('click','.answers',checkAnswer);
	$(document).on('click','.answers',checkAnswer);
}
var checkAnswer = function(){
	var userAnswer = $(this).data('type');
	var correctAnswer = qAndA[qAndACount]['correct'];
	var right = qAndA[qAndACount]['right'];
	var wrong = qAndA[qAndACount]['wrong'];
	
	if(userAnswer === correctAnswer){
		rightCount++;
        $('.triviaSection').empty();

		var newDiv = $('<div>');
		newDiv.addClass('rightAnswer');
		newDiv.text(right);
		$('.triviaSection').append(newDiv);
		// Stops timer
		clearInterval(timer)

		qAndACount++;
		if(qAndACount <= 10){
			// Removes CORRECT!
			setTimeout(
				function(){
					$('.triviaSection').empty();
                    createQuestions();
                    // Next Question in 2 seconds.
					},2500);
		}
		else{
            $('.triviaSection').empty();

			var newDiv = $('<div>');
			newDiv.addClass('rightAnswer');
			newDiv.text(right);
			$('.triviaSection').append(newDiv);
			// Stops timer
			clearInterval(timer)
			// Resets game in 2 seconds
			setTimeout(gameOver, 2500);
		}
	}
	else{
		wrongCount++;

        $('.triviaSection').empty();
        
        var newDiv = $('<div>');
		newDiv.addClass('wrongAnswer');
		newDiv.text(wrong);
		$('.triviaSection').append(newDiv);
		
		clearInterval(timer)
		
		qAndACount++;
		
		if(qAndACount <= 10){
			setTimeout(function(){
			$('.triviaSection').empty();
			createQuestions();
			},2500);
		}
		else{
            $('.triviaSection').empty();
            
			var newDiv = $('<div>');
			newDiv.addClass('wrongAnswer');
			newDiv.text(wrong);
			$('.triviaSection').append(newDiv);

			clearInterval(timer);

			setTimeout(gameOver, 3500);
		}
	}
}
// Timer function
var timerStart = function(){ 
	$('.timerSection').empty();
	// 10 seconds per question
	triviaTime = 100;
	// Time Bar
	var timeTag = $('<div>');
	timeTag.addClass('time');
	timeTag.addClass('progress');
	var timeBar = $('<div>');
	timeBar.addClass('progress-bar');
	timeBar.width(triviaTime + '%');

	$('.timerSection').append(timeTag);
	$('.time').append(timeBar);	
	//Decrements Time
	timer = setInterval(timeDecrement,100);
}
var timeDecrement = function(){ 
	//Progress bar
	$('.progress-bar').width(triviaTime + '%');
    triviaTime--;
    
	if(triviaTime === -10){
		userAnswer = false;
		//Clears Time
		clearInterval(timer);
		checkAnswer();
	}
	
}
var gameOver = function(){
	$('.triviaSection').empty();
	
    $('.timerSection').empty();
    
	var scoreDiv = $('<div>');
	scoreDiv.addClass('score');
	scoreDiv.html('Correct: ' + rightCount + '<br>' + 'Wrong: ' + wrongCount);
	$('.triviaSection').append(scoreDiv);
	
	var newDiv = $('<div>');
	newDiv.addClass('gameOver');
	newDiv.text('Game Over! Play Again ?');
	
	$('.triviaSection').append(newDiv);
	// Reset Button
	var newBtn = $('<button>');
	newBtn.addClass('redBtn resetBtn');
    newBtn.text('Reset');
    
	$('.triviaSection').append(newBtn);
	// Reset all values
	triviaTime = 100;
	qAndACount = 1;
	rightCount = 0;
	wrongCount = 0;
	// On click for reset button
	$('.resetBtn').on('click',function(){
		$('.triviaSection').empty()
		//Starts game over
		createQuestions();
	});
}

start();