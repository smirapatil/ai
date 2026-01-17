let level = 1;
let score = 0;
let correctAnswer = 0;

function generateQuestion() {
    let a, b;

    if (level === 1) {
        a = Math.floor(Math.random() * 5);
        b = Math.floor(Math.random() * 5);
    } else {
        a = Math.floor(Math.random() * 10);
        b = Math.floor(Math.random() * 10);
    }

    correctAnswer = a + b;
    document.getElementById("question").innerText =
        `Level ${level}: What is ${a} + ${b}?`;
}

function checkAnswer() {
    let userAnswer = Number(document.getElementById("answer").value);

    if (userAnswer === correctAnswer) {
        score++;
        document.getElementById("result").innerText = "🎉 Correct!";
    } else {
        document.getElementById("result").innerText =
            "❌ Try again! Correct answer is " + correctAnswer;
    }

    // AI logic: increase level
    if (score > 3) {
        level = 2;
    }

    document.getElementById("answer").value = "";
    generateQuestion();
}

generateQuestion();
