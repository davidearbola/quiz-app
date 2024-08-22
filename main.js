const quiz = [
	{
		question: "Which is largest animal in the world?",
		answers: [
			{ text: "Shark", correct: false },
			{ text: "Blue Whale", correct: true },
			{ text: "Elephant", correct: false },
			{ text: "Giraffe", correct: false },
		],
	},
	{
		question: "Which is the smallest country in the world?",
		answers: [
			{ text: "Vatican City", correct: true },
			{ text: "Bhutan", correct: false },
			{ text: "Nepal", correct: false },
			{ text: "Shri Lanka", correct: false },
		],
	},
	{
		question: "Which is the largest desert in the world?",
		answers: [
			{ text: "Kalahari", correct: false },
			{ text: "Gobi", correct: false },
			{ text: "Sahara", correct: false },
			{ text: "Antarctica", correct: true },
		],
	},
	{
		question: "Which is the smallest continent in the world?",
		answers: [
			{ text: "Asia", correct: false },
			{ text: "Australia", correct: true },
			{ text: "Arctic", correct: false },
			{ text: "Africa", correct: false },
		],
	},
];

const question = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const resetButton = document.getElementById("reset-btn");
let count = 0;
let score = 0;

function startQuiz() {
	count = 0;
	score = 0;
	createQuestionAnswer();
}

function createQuestionAnswer() {
	resetButton.style.display = "none";
	nextButton.style.display = "none";
	answerButtons.innerHTML = "";
	let activeQuestion = quiz[count];
	question.innerText = activeQuestion.question;
	activeQuestion.answers.forEach((element) => {
		let button = document.createElement("button");
		button.classList.add("btn");
		button.innerText = element.text;
		answerButtons.append(button);
		if (element.correct) {
			button.dataset.correct = element.correct;
		}
		button.addEventListener("click", selectedAnswer);
	});
}

function selectedAnswer(e) {
	const selectedBtn = e.target;
	const isCorrect = selectedBtn.dataset.correct === "true";
	if (isCorrect) {
		score++;
		selectedBtn.classList.add("correct");
	} else {
		selectedBtn.classList.add("incorrect");
	}
	Array.from(answerButtons.children).forEach((element) => {
		if (element.dataset.correct === "true") {
			element.classList.add("correct");
		}
		element.disabled = true;
	});
	nextButton.style.display = "block";
}

function nextQuestion() {
	if (count < quiz.length - 1) {
		count++;
		createQuestionAnswer();
	} else {
		nextButton.style.display = "none";
		answerButtons.innerHTML = "";
		question.innerText = `You scored ${score} out of ${quiz.length}`;
		resetButton.style.display = "block";
	}
}
startQuiz();
