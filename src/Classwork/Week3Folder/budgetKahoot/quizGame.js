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
        question: "What sport has been played on the moon?",
        options: ["Tennis", "Golf", "Frisbee", "No one played any sports on the moon"],
        correctAnswer: "Golf"
    }
];

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

function endGame() {
    const answerOptionsDiv = document.getElementById('answerOptions');
    answerOptionsDiv.innerHTML = `Game Over! Your score: ${score} out of ${quizQuestions.length}`;
    
    const existingRestartButton = document.getElementById('restartButton');
    if (existingRestartButton) {
        existingRestartButton.remove();
    }
    
    const restartButton = document.createElement('button');
    restartButton.textContent = 'Restart';
    restartButton.id = 'restartButton';
    restartButton.addEventListener('click', restartGame);
    document.getElementById('questionAndAnswerOptions').appendChild(restartButton);
}

function restartGame() {
currentQuestionIndex = 0;
score = 0;

loadQuestion();
}

document.addEventListener('DOMContentLoaded', loadQuestion);