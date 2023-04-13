const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  //******Viet code o day*********************
  setNextQuestion()
  //****************************************
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
 //******Viet code o day*********************
 currentQuestionIndex = 0
 //****************************************
  questionContainerElement.classList.remove('hide')
   //******Viet code o day*********************
   setNextQuestion()
 //****************************************
}

function setNextQuestion() {
   //******Viet code o day*********************
   resetState()
  //****************************************
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}
 //******HOAN THIEN CAC CAU HOI*********************
const questions = [
  {
    question: 'What is the largest planet in our solar system? ',
    answers: [
      { text: 'Mercury', correct: false },
      { text: 'Venus', correct: false },
      { text: 'Jupiter', correct: true },
      { text: 'Saturn', correct: false }
    ]
  },
  {
    question: 'Who painted the Mona Lisa? ',
    answers: [
      { text: 'Leonardo da Vinci  ', correct: true },
      { text: 'Vincent van Gogh', correct:false  },
      { text: ' Pablo Picasso ', correct:false  },
      { text: 'Rembrandt van Rijn', correct:false  }
    ]
  },
  {
    question: 'What is the capital of Vietnam?',
    answers: [  
      { text: 'Hanoi', correct: true },
      { text: 'Tokyo', correct:false  },
      { text: 'Beijing', correct:false  },
      { text: 'Seoul', correct: false }
    ]
  },
  {
    question: 'Which country is the largest by land area?',
    answers: [
      { text: 'Russia', correct:true },
      { text: 'Canada', correct:false },
      { text: 'China', correct:false },
      { text: 'United States', correct: false}
    ]
  }
]