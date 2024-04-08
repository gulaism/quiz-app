class UI {

    constructor() {
        this.elQuizTitle = document.querySelector('#quizTitle')
        this.elTime = document.querySelector('#time')
        this.elQuizAnswers = document.querySelector('#quizAnswers')
        this.elCurrent = document.querySelector('#currentQuestion')
        this.elTotalQuestion = document.querySelector('#totalQuestion')
        this.elNextQuestion = document.querySelector('#nextQuestion')
        this.elStartContent = document.querySelector('#startContent')
        this.elStartBtn = document.querySelector('#startBtn')
    }

    createAnswer(answers) {
        const classList = "border rounded-[5px] border-[#a7a7a7] py-[9px] px-[12px] w-full text-left"
        this.elQuizAnswers.innerHTML = ''
        Object.keys(answers).forEach(key => {
            this.elQuizAnswers.innerHTML += `
            <button class="${classList}" value="${key}">
                    <b>${key}. </b> ${answers[key]}
                 </button>
            `
        })
    }


    createQusetionTitle(number, text) {
        this.elQuizTitle.innerHTML = `<b>${number}.</b> ${text}`
    }

    createCurrentAndTotal (currentNumber, total) {
        this.elCurrent.innerHTML = currentNumber
        this.elTotalQuestion.innerHTML = total

    }


    toggleNextButton() {
        if(type === 'show') {
            this.elNextQuestion.classList.remove('hidden')
        }
        else this.elNextQuestion.classList.add('hidden')
        
    }
}