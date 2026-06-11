let quizBook = {
    title: "",
    questions: []
};
let editingIndex = -1;

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

    const newQuestion = {
    question,
    choices,
    answer
};

if(editingIndex === -1){

    quizBook.questions.push(
        newQuestion
    );

}else{

    quizBook.questions[
        editingIndex
    ] = newQuestion;

    editingIndex = -1;
}

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
function deleteQuestion(index){

    if(!confirm("削除しますか？")){
        return;
    }

    quizBook.questions.splice(index,1);

    document.getElementById("count")
        .textContent =
        `問題数: ${quizBook.questions.length}`;

    updateQuestionList();
}

function editQuestion(index){

    const q =
        quizBook.questions[index];

    document.getElementById("question")
        .value = q.question;

    document.getElementById("choice1")
        .value = q.choices[0];

    document.getElementById("choice2")
        .value = q.choices[1];

    document.getElementById("choice3")
        .value = q.choices[2];

    document.getElementById("choice4")
        .value = q.choices[3];

    document.getElementById("answer")
        .value = q.answer;

    editingIndex = index;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
