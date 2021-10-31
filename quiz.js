class Question {
    constructor(content, answer, correctAnswer, point) {
        this.content = content;
        this.answer = answer;
        this.correctAnswer = correctAnswer;
        this.point = point;
    }

    checkAnswer(answer) {
        return answer === this.correctAnswer;
    }

}
let correctAnswer = new Audio("sound/correct.mp3")
let wrongAnswer = new Audio("sound/wrong.mp3")
function music() {
    musicBackground = new Audio("sound/start.mp3");
}
music();
musicBackground.play();

let timeCount;
let message;

let timeID = setInterval(function () {
    document.getElementById('timeCountDown').innerHTML = timeCount + " giây";
    timeCount--;
    countdown();
}, 1000);


function countdown() {
    let styles = document.getElementById('styleTime');
    let styleTime = document.getElementById('timeCountDown');
    if (timeCount < 0) {
        clearInterval(timeID);
        message = window.alert('Time Out!');
        reload();
    }
    if (timeCount < 5){
        styles.style.color = 'red';
        styleTime.style.color = 'red';
    }

}

let question1 = new Question("Câu 1:Điền từ còn thiếu vào chỗ trống trong câu: ”Gần mực thì đen, gần đèn thì …”? ", ["A.Rạng", "B.Lóa", "C.Chói", "D.Mù"], "A.Rạng", "10");
let question2 = new Question("Câu 2:Thứ giết chết chúng ta là ..", ["A.Quá Khứ", "B.Ký ức", "C.Kỷ niệm", "D.Dao phóng lợn"], "D.Dao phóng lợn", "20");
let question3 = new Question("Câu 3:Đâu là tên người làm quiz?", ["A.Tài", "B.Hải", "C.Đạt", "D.Lâm"], "B.Hải", "40");
let question4 = new Question("Câu 4:Sóng bắt đầu từ gió, gió bắt đầu từ đâu?", ["A.Em cũng không biết", "B.Chênh lệch khí áp", "C.Mưa", "D.Sương Mù"], "B.Chênh lệch khí áp", "70");
let question5 = new Question("Câu 5:Đồng âm là ...?", ["A.Từ cùng âm", "B.FC Đen vâu", "C.Âm bằng đồng", "D.Dương quá"], "B.FC Đen Vâu", "100");

let questions = [question1, question2, question3, question4, question5];
let getQuestion = document.getElementById('question');
showQuestion(question1);

function next(index) {
    index++;
    showQuestion(questions[index]);
}

function showQuestion(question_1) { // tham so question_1 la 1
    timeCount = 30;
    getQuestion.innerHTML = question_1.content;
    getQuestion.setAttribute("questionScreen", questions.indexOf(question_1));
    for (let i = 0; i < 4; i++) {
        let getAswId = document.getElementById('answer_' + (i + 1));
        getAswId.innerHTML = question_1.answer[i];
    }
}


showQuestion(question1);
let index = 0;

function checkAnswer(id) {
    let answer = document.getElementById(id).innerHTML;
    // if (!confirm("Are you sure?")) {
    //     return true;
    // }
    if (questions[index].checkAnswer(answer)) {
        correctAnswer.play();
        alert('You are correct');
        if (index === 14) {
            alert("Excelent, you win !");
            timeCount = 1;
            reload();
        }
        next(index);
        correctAnswer.pause();
        index++;
        console.log(index);
        document.getElementById('result').innerHTML = "Bonus: " + (questions[index].point);
        timeCount = 30;
    } else {
        wrongAnswer.play();
        alert('You lose ! Please try again');
        reload();
    }
}

function reload() {
    location.replace("index.html");
}



