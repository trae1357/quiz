//1. create HTML layout
//2. create css layout to configure with html 
//3. in java I need to create a start button
//4. I need to tie in the start button with a timer 
//5. I have to create a test question
//6. When one answer is choosen i need to have another question pop up
//7. When a answer is incorrect i need to subtract time from the clock
//8. The quiz is over once all answers are answered or time is out 
//9. When the quiz is over save initals in leaderboard 

var seconds = 10, seconds = document.querySelector('#start_btn');
(function countdown() {
    seconds.textContent = seconds + ' second' + (seconds == 1 ?  '' :  's')
    if(seconds --> 0) setTimeout(countdown, 1000)
})();
console.log(s