let quizBook = {
    title: "",
    questions: []
};

function createQuizBook(){

    const title =
        document.getElementById("quizTitle").value;

    if(!title){
        alert("タイトルを入力してください");
        return;
    }

    quizBook.title = title;

    document.getElementById("bookName")
        .textContent = title;

    document.getElementById("editor")
        .style.display = "block";
}

function addQuestion(){

    const question =
        document.getElementById("question").value;

    const choices = [
        document.getElementById("choice1").value,
        document.getElementById("choice2").value,
        document.getElementById("choice3").value,
        document.getElementById("choice4").value
    ];

    const answer =
        Number(
            document.getElementById("answer").value
        );

    quizBook.questions.push({
        question,
        choices,
        answer
    });

    document.getElementById("count")
        .textContent =
        `問題数: ${quizBook.questions.length}`;

    document.getElementById("question").value = "";
    document.getElementById("choice1").value = "";
    document.getElementById("choice2").value = "";
    document.getElementById("choice3").value = "";
    document.getElementById("choice4").value = "";

    updateQuestionList();
}

function saveQuizBook(){

    const quizzes =
        JSON.parse(
            localStorage.getItem("quizzes")
        ) || [];

    quizzes.push(quizBook);

    localStorage.setItem(
        "quizzes",
        JSON.stringify(quizzes)
    );

    alert("問題集を保存しました！");
}
function updateQuestionList(){

    const list =
        document.getElementById("questionList");

    list.innerHTML = "";

    quizBook.questions.forEach((q,index)=>{

        list.innerHTML += `
        <details class="quiz-card">

            <summary>
                問題 ${index + 1}
            </summary>

            <p>${q.question}</p>

            <ul>
                ${q.choices.map(
                    c => `<li>${c}</li>`
                ).join("")}
            </ul>

            <button onclick="editQuestion(${index})">
                ✏️ 編集
            </button>

            <button onclick="deleteQuestion(${index})">
                🗑️ 削除
            </button>

        </details>
        `;
    });
}
