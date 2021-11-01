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

let question10 = new Question("Câu 10:Điền từ còn thiếu vào chỗ trống trong câu: ”Gần mực thì đen, gần đèn thì …”? ", ["A.Rạng", "B.Lóa", "C.Chói", "D.Mù"], "A.Rạng", "300");
let question9 = new Question("Câu 9:Thứ giết chết chúng ta là ..", ["A.Quá Khứ", "B.Ký ức", "C.Kỷ niệm", "D.Dao phóng lợn"], "D.Dao phóng lợn", "250");
let question8 = new Question("Câu 8:Đâu là tên người làm quiz?", ["A.Tài", "B.Hải", "C.Đạt", "D.Lâm"], "D.Lâm", "200");
let question7 = new Question("Câu 7:Sóng bắt đầu từ gió, gió bắt đầu từ đâu?", ["A.Em cũng không biết nữa", "B.Chênh lệch khí áp", "C.Mưa", "D.Sương Mù"], "B.Chênh lệch khí áp", "170");
let question6 = new Question("Câu 6:Mưa ngâu là vào khoảng tháng mấy trong năm?", ["A.Tháng 1 âm", "B.Tháng 3 âm", "C.Tháng 5 âm", "D.Tháng 7 âm"], "D.Tháng 7 âm", "150");
let question5 = new Question("Câu 5:Trong truyện Kiều, khi gặp Thúy Kiều lần đầu tiên, Kim Trọng cưỡi ngựa gì?", ["A.Xích Thố", "B.Ngựa Ô", "C.Bạch mã", "D.Ngựa vằn"], "C.Bạch mã", "120");
let question4 = new Question("Câu 4:Phủ Tây Hồ hiện nay thờ ai?", ["A.Chử Đồng Tử", "B.Mẫu Liễu Hạnh", "C.Thánh Gióng", "D.Thạch Sanh"], "B.Mẫu Liễu Hạnh", "100");
let question3 = new Question("Câu 3:Họa sĩ nào sau đây không phải người Ý?", ["A.Pablo Picasso", "B.Leonardo De Vinci", "C.Michelagelo", "D.Rafaelo"], "A.Pablo Picasso", "50");
let question2 = new Question("Câu 2:CodeGym thành lập năm bao nhiêu?", ["A.2018", "B.2019", "C.2017", "D.2020"], "C.2017", "20");
let question1 = new Question("Câu 1:What is dominant color of CodeGym?", ["A.Purple", "B.Red", "C.Orange", "D.Blue"], "D.Blue", "10");

let questions = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];
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
        alert('Đến câu tiếp nào!');
        if (index === 9) {
            alert("Congratulation!");
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
        alert('Hơi thiếu chút may mắn thôi! Bạn muốn thử lại không? ;) ');
        reload();
    }
}

function reload() {
    location.replace("index.html");
}



