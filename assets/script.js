function QuestionAnswer(question, answers, correct) {

    this.question = question;
    this.answers = answers;
    this.correct = correct;

}

let question1 = new QuestionAnswer("Inside which HTML element do you put the JavaScript link?", "'<java>', '<script>', '<js>', '<javaScript>'", "<script>")

let question2 = new QuestionAnswer("How would you write 'Hello World!' in an alert box ", "", "alert('Hello World!')" ,"")

let question3 = new QuestionAnswer("What is this type of function called called? function ()", "", "Both A and C")

let question4 = new QuestionAnswer("What are these examples of?", "'click','mouseover', 'resize'" , "Event Listeners")

let question5 = new QuestionAnswer("What types of values can you put into an array", "", "yes")

let question6 = new QuestionAnswer("What will the following code return: Boolean(10 > 9)", "", "true")

let question7 = new QuestionAnswer("What is the correct way to write a JavaScript array?", "", "")

let question8 = new QuestionAnswer("How would you call a function named 'myFunction'?", "", "'myFunction()'")

let question9 = new QuestionAnswer("How would you grab the first occurrence of an HTML Element '<p>' in the document? ", "", "'document.querySelector('p')")

let question10 = new QuestionAnswer("What JavaScript input is wrapped in quotations?", "", "string")