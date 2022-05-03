const questions = [
    {
        question: 'What is the full form of DOM?',
        answers: ['Data Object Model', 'Document or Model', 'Document Object Model', 'Document Object Medium'],
        correctAnswer: 2,
    },
    {
        question: 'Which of the following function of Array object removes the last element from an array and returns that element?',
        answers: ['pop()', 'push()', 'join()', 'map()'],
        correctAnswer: 0,
    },
    {
        question: 'Which of the following function of Array object extracts a section of an array and returns a new array?',
        answers: ['reverse()', 'shift()', 'slice()', 'some()'],
        correctAnswer: 2,
    },
    {
        question: 'How do four values work on border-radius?',
        answers: ['trtop, bottom, left, right', 'up, down, front, behind', 'top-left, top-right, bottom-right, bottom-left', 'bottom-left, bottom-right, top-right, top-left'],
        correctAnswer: 2,
    },
    {
        question: 'How can you created rounded corners using CSS3?',
        answers: ['border[round]: 30px;', 'corner-effect: round;', 'border-radius: 30px;', 'alpha-effect: round-corner;'],
        correctAnswer: 2,
    },
    {
        question: 'Which statement cannot be used to declare a variable in JavaScript?',
        answers: ['let', 'var', 'tree', 'cost'],
        correctAnswer: 2,
    }
];

const randomedQuestions = [];
let quizContainer = document.querySelector(".quiz-container");
let quiz = document.querySelector("#quiz");
let button = document.querySelector("button");
let check = document.querySelector("#check");
let results = document.querySelector("#results");
let correctCounter = 0;
let answer = document.querySelectorAll("input[type='radio']");
let body = document.querySelector("body");
let checkResult = false;

function randomQuestions(pQuestions) {
    for (let index = 0; index < pQuestions.length; index++) {
        let randomNumber = Math.floor(Math.random() * pQuestions.length);
        let question = pQuestions[randomNumber];
        if (!randomedQuestions.includes(question)) {
            randomedQuestions.push(question);
        }
    }
}

randomQuestions(questions);

function createFrame(pQuestion) {
    quiz.innerHTML += `
            <p>${pQuestion.question}</p><ul>
         `;
    for (let i = 0; i < pQuestion.answers.length; i++) {
        quiz.innerHTML += `<li><input type="radio" name="answer id="${i}"> <label for="${i}">${pQuestion.answers[i]}</label></li>`;
    }
    quiz.innerHTML += `</ul>`;
}

function renderQuestions(pQuestion) {
    pQuestion.splice(pQuestion[0], 1);
    quiz.innerHTML = "";
    if (pQuestion.length != 0) {
        createFrame(pQuestion[0]);
    } else {
        body.innerHTML = `Your score is ${correctCounter}`;
    }
}

renderQuestions(randomedQuestions);
button.addEventListener("click", () => {
    renderQuestions(randomedQuestions);
});
function checkAnswer(pQuestion) {
    for (let i = 0; i < answer.length; i++) {
        answer[i].addEventListener("click", (event) => {
            if (event.target.id == pQuestion.correctAnswer) {
                correctCounter++;
                return (checkResult = true);
            } else {
                return (checkResult = false);
            }
        });
    }
}

check.addEventListener("click", () => {
    for (let i = 0; i < randomQuestions.length; i++) {
        checkAnswer(randomQuestions[i])
    }
    if (checkResult) {
        body.style.backgroundColor = "green";
        body.style.color = "white";
    } else {
        body.style.backgroundColor = "red";
        body.style.color = "white";
    }
});
