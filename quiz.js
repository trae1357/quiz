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
        question:"What does HTML stand for?",
        options:["Hyper Text Processer","Hyper Text markup langue","Hyper text multi lan","Hyper tool multi lang"],
        answer:1
    },
    {
        question:"What does CSS stand for ?",
        options:["Carbon study science ","Casscading style sheet","Common study student","cool stuff soon"],
        answer:1
    },
    {
    question:"Is coding fun?",
        options:["Yes","no","kinda","its okay"],
        answer:0
    },
        {
        question:"What does VS stand for ?",
        options:["Visual studio ","Vanity stuff","Very student","Vikings stuff"],
        answer:0
        }
]

var questionIndex = 0
var timeLeft = questionArray.length * 15

var start = document.querySelector(".start")

var rules_box = document.querySelector(".rules_box")
var quiz_box = document.querySelector(".quiz_box")
var secondsLeft = document.querySelector(".seconds_left")
var queText = document.querySelector(".que-text")
var optionList = document.querySelector(".option_list")
var timeId = null 
var nextButton = document.querySelector(".next_button")

start.addEventListener("click", function () {
    rules_box.classList.add("hide")
    quiz_box.classList.remove("hide")
    startQuiz()
})

function displayQuestion(){
    queText.innerHTML = questionArray[questionIndex].question
    optionList.innerHTML=""
    for (let i = 0; i <  questionArray[questionIndex].options.length; i++) {
        var div=document.createElement("div")
       div.classList.add("option")
       var span=document.createElement("span")
       span.innerHTML=questionArray[questionIndex].options[i]
       var divIcon= document.createElement("div")
       divIcon.classList.add("icon")
       divIcon.innerHTML="&#10003;"
       div.append(span)
       div.append(divIcon)
        
        optionList.append(div)
    }


}
nextButton.addEventListener("click", nextQuestion)

function nextQuestion(){
   
    questionIndex++
    if(questionIndex<questionArray.length){
        displayQuestion()
    }
    else{
        clearInterval(timeId)
    }
   
}

function startQuiz(){
    timeId = setInterval(countdown, 1000)
   displayQuestion()

}


function countdown(){
    timeLeft--
    secondsLeft.innerHTML = timeLeft
}