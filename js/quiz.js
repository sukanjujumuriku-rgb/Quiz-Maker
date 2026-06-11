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

        document.body.innerHTML = `
            <div class="container">
                <h1>結果</h1>

                <h2>
                    ${score} / ${quizBook.questions.length}
                </h2>
            </div>
        `;
    }
}
