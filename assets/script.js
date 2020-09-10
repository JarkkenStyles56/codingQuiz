class QuestionAnswer {
    constructor(question, answers, correctAnswer) {

        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;

    }
}

let question1 = new QuestionAnswer("Inside which HTML element do you put the JavaScript link?", ["<head>", "<div>", "<li>", "<script>"], "<script>")

let question2 = new QuestionAnswer("How would you write 'Hello World!' in an alert box ", ["alertBox('Hello World!')", "prompt('Hello World!')", "alert('Hello World!')", "helloWorld()"], "alert('Hello World!')")

let question3 = new QuestionAnswer("What is this type of function called called? function ()", ["An Anonymous Function", "Even listener Function", "A Callback", "Both A and C"], "Both A and C")

let question4 = new QuestionAnswer("What are these examples of?; 'click','mouseover', 'resize'", ["Event Listeners", "Methods", "Elements", "Commands"], "Event Listeners")

let question5 = new QuestionAnswer("What are the only types of values can you put into an array", ["Strings", "Numbers", "Arrays", "yes"], "yes")

let question6 = new QuestionAnswer("What will the following code return: Boolean(10 > 9)", ["Syntax Error", "True", "False", "1"], "True")

let question7 = new QuestionAnswer("What is the correct way to write a JavaScript array?"["array1 = 1, 2, a, b;", "let var = [1, 2, a, b];", "array(1,2,a,b)", "None of the Above"], "let var = [1, 2, a, b];")

let question8 = new QuestionAnswer("How would you call a function named 'myFunction'?", ["myFunction()", "thisFunction(myFunction)", "let myFunction = 'myFunction'", "Dial (693)862-8466 on a phone"], "myFunction()")

let question9 = new QuestionAnswer("How would you grab the first occurrence of an HTML Element '<p>' in the document using javascript? ", ["With your Hand", "Ctrl+p", "document.querySelectorAll('p')", "document.querySelector('p')"], "document.querySelector('p')")

let question10 = new QuestionAnswer("What JavaScript input is wrapped in quotations?", ["number", "if/else", "string", "boolean"], "string")


//Create a timer
let secondsLeft = 120;




$(document).ready(function () {
    $(".hide").hide()
    //Create .on("click", function (){}) on start button to show answer buttons

    $("#start-button").on("click", function () {

        $("#start-button").hide()
        $(".hide").show()

        function setTime() {
            let timerInterval = setInterval(function () {
                secondsLeft--;

                if (secondsLeft === 0) {
                    clearInterval(timerInterval);
                    
                }
                console.log(secondsLeft)

            }, 1000);
        }
        setTime()
        console.log(secondsLeft)
    })
    // $("#answer-button").data(this.answers[i])

    // Create if/else statement to decide whether or not the answer selected was correct; 
    this.isCorrectAnswer = function (userAnswer) {
        if (userAnswer === this.correctAnswer) {
            return true;
        } else {
            return false;
        }
    }





    // if answer is incorrect subtract time from timeleft





    //



    //When quiz is completed either by timer reaching zero, or all questions are answered link to highscore screen


})