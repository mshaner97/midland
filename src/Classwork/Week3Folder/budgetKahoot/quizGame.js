const quizQuestions = [
    {
        question: "What is a group of cats called?",
        options: ["A Party", "A String", "A Clowder", "A Drowt"],
        correctAnswer: "A Clowder"
    },
    {
        question: "Where is a shrimp's heart located?",
        options: ["It's head", "It's chest", "It's stomach", "It's butt"],
        correctAnswer: "It's head"
    },
    {
        question: "How many bones does a shark have?",
        options: ["104", "342", "92", "0"],
        correctAnswer: "0"
    },
    {
        question: "Almost all fossils are preserved in this type of rock:",
        options: ["Metamorphic rock", "Sedimentary rock", "Ignious rock", "Fossils can be found in most types of rock"],
        correctAnswer: "Sedimentary rock"
    },
    {
        question: "What is Prince Harry's legal first name?",
        options: ["Harry (duh)", "Harold", "Henry", "Herod"],
        correctAnswer: "Henry"
    },
    {
        question: "Which president was also a licenced bartender?",
        options: ["George Washington", "Warren Harding", "Harry Truman", "Abraham Lincoln"],
        correctAnswer: "Abraham Lincoln"
    },
    {
        question: "How many elements are currently on the periodic table?",
        options: ["60", "97", "118", "146"],
        correctAnswer: "118"
    },    {
        question: "Who was the first American woman in space?",
        options: ["Sally Ride", "Anna Lee Fisher", "Ellen Baker", "Marsha Ivins"],
        correctAnswer: "Sally Ride"
    },
    {
        question: "Who won the first 'American Idol'?",
        options: ["Carrie Underwood", "Jordin Sparks", "Laine Hardy", "Kelly Clarkson"],
        correctAnswer: "Kelly Clarkson"
    },
    {
        question: "What sport has been played on the moon?",
        options: ["Tennis", "Golf", "Frisbee", "No one played any sports on the moon"],
        correctAnswer: "Golf"
    }
];

let timeLeft = 120;
let timerInterval;

function startTimer() {
    const timerDisplay = document.getElementById('timer');
    
    timerInterval = setInterval(() => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        
        timerDisplay.textContent = `Time Left: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        
        timeLeft--;
        
        if (timeLeft < 0) {
            clearInterval(timerInterval);
            endGame();
        }
    }, 1000);
}

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    document.getElementById('questionBox').textContent = currentQuestion.question;
    
    const answerOptionsDiv = document.getElementById('answerOptions');
    answerOptionsDiv.innerHTML = '';

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(option));
        answerOptionsDiv.appendChild(button);
    });
}

function checkAnswer(selectedAnswer) {
const currentQuestion = quizQuestions[currentQuestionIndex];
if (selectedAnswer === currentQuestion.correctAnswer) {
    score++;
}
currentQuestionIndex++;
if (currentQuestionIndex < quizQuestions.length) {
    loadQuestion();
} else {
    endGame();
}
}

function displayPhoto(imagePath) {
    const imgElement = document.createElement('img');
    imgElement.src = imagePath;
    imgElement.alt = 'Quiz result photo';
    const container = document.getElementById('photobox');
    container.innerHTML = '';
    container.appendChild(imgElement);
}

function endGame() {
    const answerOptionsDiv = document.getElementById('answerOptions');
    answerOptionsDiv.innerHTML = `Game Over! Your score: ${score} out of ${quizQuestions.length}`;
    clearInterval(timerInterval);

if(score === 0 || score === 1 || score === 2 || score === 3 || score === 4){
    displayPhoto('images/badscore.jpeg');
} else if (score === 5) {
    displayPhoto('images/halfright.jpeg');
} else if (score === 6 || score === 7 || score === 8) {
    displayPhoto('images/okscore.jpeg');
} else if (score === 9 || score === 10){
    displayPhoto('images/perfectscore.png');
}
}

function restartGame() {
    currentQuestionIndex = 0;
    score = 0;
    timeLeft = 120;
    const photobox = document.getElementById('photobox');
    if (photobox) {
        photobox.innerHTML = '';
    }
    startTimer();
    loadQuestion();
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('restartButton').addEventListener('click', restartGame);
    loadQuestion();
    startTimer();
});
