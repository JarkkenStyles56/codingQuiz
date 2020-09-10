class QuestionAnswer {
    constructor(question, answers, correctAnswer) {

        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;

    }
}

let question1 = new QuestionAnswer("Inside which HTML element do you put the JavaScript link?", "<script>")

let question2 = new QuestionAnswer("How would you write 'Hello World!' in an alert box ", "alert('Hello World!')")

let question3 = new QuestionAnswer("What is this type of function called called? function ()", "Both A and C")

let question4 = new QuestionAnswer("What are these examples of?; 'click','mouseover', 'resize'", "Event Listeners")

let question5 = new QuestionAnswer("What types of values can you put into an array", "yes")

let question6 = new QuestionAnswer("What will the following code return: Boolean(10 > 9)", "true")

let question7 = new QuestionAnswer("What is the correct way to write a JavaScript array?"["array1 = 1, 2, a, b;", "let var = [1, 2, a, b];"], "let var = [1, 2, a, b];")

let question8 = new QuestionAnswer("How would you call a function named 'myFunction'?", "'myFunction()'")

let question9 = new QuestionAnswer("How would you grab the first occurrence of an HTML Element '<p>' in the document? ", "'document.querySelector('p')")

let question10 = new QuestionAnswer("What JavaScript input is wrapped in quotations?", "string")


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