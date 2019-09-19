let count = 5
let correct = 0
let incorrect = 0
let currentQuestion = 0
let time;

let triviaQuestions = [
    {
        question: 'What is my name',
        choices: ['Maverick', 'Aladdin', 'Ace'],
        answer: 'Maverick'
    },

    {
        question: 'How old am I?',
        choices: ['24','25','26'],
        answer: '25'

    }


]
const nextQuestion = _ => {
    currentQuestion++
    grabQuestion()
}
const countDown = _ => {
    count --

    document.getElementById('time').innerHTML = `Time: ${count}`
    if( count === 0){
        clearInterval(time)
        incorrect++
    }
}

const grabQuestion = _ => {
    const question = triviaQuestions[currentQuestion].question
    const choices = triviaQuestions[currentQuestion].choices
    count = 5;
    time = setInterval(countDown, 1000)

    document.getElementById('time').innerHTML = `Time: ${count}`
    document.getElementById('game').innerHTML = `<h4>Question: ${question}</h4> 
    ${grabChoice()}`
    

}

function grabChoice() {
    const choice = triviaQuestions[currentQuestion].choices
    let result = '';

    for(let i = 0; i < choice.length; i++){
        result += `<p class="choice" data-value="${choice[i]}">${choice[i]}</p>`
    }
    return result
}


grabQuestion()