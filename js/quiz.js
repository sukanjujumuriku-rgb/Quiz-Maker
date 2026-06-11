const quizzes =
    JSON.parse(
        localStorage.getItem("quizzes")
    ) || [];

const selectedIndex =
    localStorage.getItem("selectedQuiz");

const quizBook =
    quizzes[selectedIndex];

document.getElementById("quizTitle")
    .textContent = quizBook.title;

let currentQuestion = 0;
let score = 0;
let answers = [];

showQuestion();

function showQuestion(){

    const q =
        quizBook.questions[currentQuestion];

    document.getElementById("question")
        .textContent = q.question;

    const choicesDiv =
        document.getElementById("choices");

    choicesDiv.innerHTML = "";

    q.choices.forEach((choice, index)=>{

        choicesDiv.innerHTML += `
            <button onclick="checkAnswer(${index})">
                ${choice}
            </button>
        `;
    });
}

function checkAnswer(answer){

    const q =
        quizBook.questions[currentQuestion];

    answers.push({
    question:q.question,
    correct:q.answer,
    user:answer,
    choices:q.choices
});

    if(answer === q.answer){
        score++;
    }

    currentQuestion++;

    if(
        currentQuestion <
        quizBook.questions.length
    ){
        showQuestion();
    }else{

        showResult();
    }
}

function showResult(){

    const percent = Math.round(
        score /
        quizBook.questions.length *
        100
    );

    document.body.innerHTML = `
    <div class="container">

        <h1>結果発表</h1>

        <div id="percentDisplay"
             class="big-score">
             0%
        </div>

        <div id="confetti"></div>

        <div id="answerReview"></div>

        <a href="play.html"
           class="menu-btn">
           戻る
        </a>

    </div>
    `;

    animateScore(percent);

    createReview();
}
function animateScore(target){

    const display =
        document.getElementById(
            "percentDisplay"
        );

    let current = 0;

    const interval =
        setInterval(()=>{

        current +=
            Math.max(
                1,
                Math.ceil(
                    (target-current)/8
                )
            );

        if(current >= target){

            current = target;

            clearInterval(interval);

            display.classList.add(
                "boom"
            );

            if(target === 100){
                createConfetti();
            }
        }

        display.textContent =
            current + "%";

    },40);
}
function createReview(){

    const review =
        document.getElementById(
            "answerReview"
        );

    answers.forEach(
        (a,index)=>{

        const correct =
            a.user === a.correct;

        review.innerHTML += `
        <details class="quiz-card">

            <summary>
                問題${index+1}
                ${correct ? "⭕" : "❌"}
            </summary>

            <p>
                ${a.question}
            </p>

            <p>
                あなた：
                ${a.choices[a.user]}
            </p>

            <p>
                正解：
                ${a.choices[a.correct]}
            </p>

        </details>
        `;
    });
}
function createConfetti(){

    for(let i=0;i<100;i++){

        const piece =
            document.createElement("div");

        piece.className =
            "confetti";

        piece.style.left =
            Math.random()*100 + "%";

        piece.style.animationDelay =
            Math.random()*2 + "s";

        document.body.appendChild(
            piece
        );
    }
}
