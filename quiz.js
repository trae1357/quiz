//1. create HTML layout
//2. create css layout to configure with html 
//3. in java I need to create a start button
//4. I need to tie in the start button with a timer 
//5. I have to create a test question
//6. When one answer is choosen i need to have another question pop up
//7. When a answer is incorrect i need to subtract time from the clock
//8. The quiz is over once all answers are answered or time is out 
//9. When the quiz is over save initals in leaderboard 



var questionArray = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Processer", "Hyper Text markup langue", "Hyper text multiple language", "Hyper tool multiple language"],
        answer: 1
    },
    {
        question: "What does CSS stand for ?",
        options: ["Carbon study science ", "Casscading style sheet", "Common study student", "cool stuff soon"],
        answer: 1
    },
    {
        question: "Is coding fun?",
        options: ["Yes", "no", "kinda", "its okay"],
        answer: 0
    },
    {
        question: "What does VS stand for ?",
        options: ["Visual studio ", "Vanity stuff", "Very student", "Vikings stuff"],
        answer: 0
    },

    {
        question: "How long does it take to learn Java Script?",
        options: ["You never stop learning ", "6 months", "1 year ", "5 years"],
        answer: 0
    }
]

var questionIndex = 0
var timeLeft = questionArray.length * 10

var start = document.querySelector(".start")

var rules_box = document.querySelector(".rules_box")
var quiz_box = document.querySelector(".quiz_box")
var secondsLeft = document.querySelector(".seconds_left")
var queText = document.querySelector(".que-text")
var optionList = document.querySelector(".option_list")
var timeId = null
var nextButton = document.querySelector(".next_button")
var playerScore = document.querySelector
var counter = 1;
var id
var highScore = timeLeft;
start.addEventListener("click", function () {
    rules_box.classList.add("hide")
    quiz_box.classList.remove("hide")
    startQuiz()
})

function displayQuestion() {
    myFunction()
    queText.innerHTML = questionArray[questionIndex].question
    optionList.innerHTML = ""
    document.getElementById("message").innerHTML =""
    for (let i = 0; i < questionArray[questionIndex].options.length; i++) {
        var div = document.createElement("div")
        div.classList.add("option")
        var span = document.createElement("span")


        span.innerHTML = questionArray[questionIndex].options[i]

        var divIcon = document.createElement("div")

        div.append(span)
        div.append(divIcon)
        div.setAttribute("data-id", i)
        div.addEventListener("click", function () {

            id = this.getAttribute("data-id")

        })
        optionList.append(div)
    }


}


nextButton.addEventListener("click", nextQuestion)

function nextQuestion() {

    id= parseInt(id)
    if (questionIndex < questionArray.length) {
        console.log(id ,questionArray[questionIndex].answer)
        if (id === questionArray[questionIndex].answer) {
             
         document.getElementById("message").innerHTML = "correct"

        }
        else {
            document.getElementById("message").innerHTML = "incorrect"
        }
    }
        
    questionIndex++


    if (questionIndex < questionArray.length) {

        setTimeout(displayQuestion, 1000)
    }
    else {
        clearInterval(timeId)
        document.querySelector(".result_box").classList.remove("hide")
        document.querySelector(".quiz_box").classList.add("hide")
    }

}


function startQuiz() {
    timeId = setInterval(countdown, 1000)
    displayQuestion()

}


function countdown() {
    timeLeft--
    secondsLeft.innerHTML = timeLeft
}


function myFunction() {
    document.getElementById("number").innerHTML = counter++;

}

function fn1(){
    var str = document.getElementById("text1").value;
    var player = {
        initials: str,
        score: timeLeft
        
    }
    return player
}

function refreshPage(){
    window.location.reload();
} 

function useLocalStorage(){
    var player = fn1();
    localStorage.setItem("HighScore", JSON.stringify(player))
    
}

document.getElementById("save").addEventListener("click", useLocalStorage);

//function
var player = JSON.parse(localStorage.getItem("HighScore"))
console.log(player)


