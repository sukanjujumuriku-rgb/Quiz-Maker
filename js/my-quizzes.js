const quizList = document.getElementById("quizList");

const quizzes = JSON.parse(
    localStorage.getItem("quizzes")
) || [];

if (quizzes.length === 0) {

    quizList.innerHTML = `
        <p>まだ問題集がありません</p>
    `;

} else {

    quizzes.forEach((quiz, index) => {

        quizList.innerHTML += `
            <div class="quiz-card">
                <h3>${quiz.title}</h3>

                <button onclick="startQuiz(${index})">
                    解く
                </button>
            </div>
        `;
    });
}

function startQuiz(index){

    localStorage.setItem(
        "selectedQuiz",
        index
    );

    location.href = "quiz.html";
}
