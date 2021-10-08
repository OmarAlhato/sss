const quizData = [

    {
        question: "1-   What Is The Capital Of Palestine",
        a: "Tel Aviv",
        b: "Jerusalem",
        c: "Istanbul",
        d: "New York",
        correct: "b",
    },

    {
        question: "2 - What is the most used programing language 10 2019?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },

    {
        question: "3- Who is the President of US?",
        a: "Florin Pop",
        b: "Donald Trump",
        c: "Ivan Saldano",
        d: "Mihai Andrei",
        correct: "b",
    },

    {
        question: "4- What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboots Lamborginis",
        correct: "a",
    },

    {
        question: "5- what year was javascript Launched",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },

    {
        question: "6- What Is The Capital Of Palestine",
        a: "Tel Aviv",
        b: "Jerusalem",
        c: "Istanbul",
        d: "New York",
        correct: "b",
    },




];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEls = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEls.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}
loadQuiz();

function getSelected() {

    let answer = undefined;
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
            console.log(answer);
        }
    });
    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
            <h2>You answeod correctly at ${score}/${quizData.length} question</h2>
            <button onclick="location.reload()">Reload</button>
            `
        }
    }
});


async function promicefun() {
    var proimse1 = await new Promise(function(r, f) {
        setTimeout(function() {
            r(
                alert("The page has exceeded a minute and must be reloaded"),
                location.reload()
            );


        }, 20000)
    }).then(r).catch(console.log);


}
promicefun();