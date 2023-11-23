// -- ROOT --
const root = document.getElementById('root');

// Base de données
const questionsData = [
    {question: 'What is the capital of France?', answer: 'Paris', level: '🥉', id: 1},
    {question: 'What is the largest country in the world?', answer: 'Russia', level: '🥉', id: 2},
    {question: 'What is the currency of Japan?', answer: 'Yen', level: '🥉', id: 3},
    {question: 'What is the highest mountain in the world?', answer: 'Mount Everest', level: '🥈', id: 4},
    {question: 'What is the smallest country in the world?', answer: 'Vatican City', level: '🥈', id: 5},
    {question: 'What is the largest ocean in the world?', answer: 'Pacific Ocean', level: '🥈', id: 6},
    {question: 'Which country won the FIFA World Cup in 2018?', answer: 'France', level: '🥇', id: 7},
    {question: 'Who painted the Mona Lisa?', answer: 'Leonardo da Vinci', level: '🥇', id: 8},
    {question: 'What is the currency of Canada?', answer: 'Canadian dollar', level: '🥇', id: 9},
    {question: 'What is the highest waterfall in the world?', answer: 'Angel Falls', level: '🥇', id: 10},
]

// -- MAIN --
const main = document.createElement('main');

// -- HEADER --

const header = document.createElement('header');

const logo = document.createElement('img');
logo.classList.add('header--img');
logo.src = '../assets/logo-quiz.png'
logo.alt = 'Logo Quiz';
header.appendChild(logo);

const title = document.createElement('h1');
title.classList.add('header--title');
title.textContent = 'Dynamic Quiz';
header.appendChild(title);

const description = document.createElement('h3');
description.classList.add('header--descr');
description.textContent = 'Web Dynamique - Final project';
header.appendChild(description);

// -- NAV --
const nav = document.createElement('nav');
nav.classList.add('searchbar--container');

const searchbar = document.createElement('input');
searchbar.classList.add('searchbar--search');
searchbar.type = 'text';
searchbar.placeholder = 'Filter... 🥇🥈🥉';
nav.appendChild(searchbar);

// -- QUESTIONS --
const questions = document.createElement('div');
questions.classList.add('quiz-questions');

questionsData.forEach(question => {
    const questionContainer = document.createElement('section');
    questionContainer.classList.add('question');

    const questionLevel = document.createElement('p');
    questionLevel.classList.add('question--level');
    questionLevel.textContent = question.level;
    questionContainer.appendChild(questionLevel);

    const questionTitle = document.createElement('h2');
    questionTitle.textContent = question.question;
    questionContainer.appendChild(questionTitle);



    const questionAnswer = document.createElement('p');
    questionAnswer.classList.add('question--answer');
    questionAnswer.classList.add('hidden');
    questionAnswer.textContent = question.answer;
    questionContainer.appendChild(questionAnswer);

    questions.appendChild(questionContainer);
});

// Append à main
main.appendChild(header);
main.appendChild(nav);
main.appendChild(questions);

// Append à root
root.appendChild(main);

// Gère la visibilité des réponses
questions.addEventListener('click', (event) => {
    const clickedQuestion = event.target.closest('.question');
    if (clickedQuestion) {
        clickedQuestion.querySelector('.question--answer').classList.toggle('hidden');
    }
});


// Récupère la valeur de la searchbar
const getSearchBarValue = () => searchbar.value.toLowerCase();

// Affiche les questions filtrées
const displayFilteredQuestions = () => {

    // Filtre les questions en fonction de la valeur de la searchbar
    const filteredQuestions = questionsData.filter(question => (question.question.toLowerCase().includes(getSearchBarValue())) || (question.level.toLowerCase() === getSearchBarValue()));

    // Affiche les questions filtrées
    questions.innerHTML = '';
    filteredQuestions.forEach(question => {
        const questionContainer = document.createElement('section');
        questionContainer.classList.add('question');

        const questionLevel = document.createElement('p');
        questionLevel.classList.add('question--level');
        questionLevel.textContent = question.level;
        questionContainer.appendChild(questionLevel);

        const questionTitle = document.createElement('h2');
        questionTitle.textContent = question.question;
        questionContainer.appendChild(questionTitle);

        const questionAnswer = document.createElement('p');
        questionAnswer.classList.add('question--answer');
        questionAnswer.classList.add('hidden');
        questionAnswer.textContent = question.answer;
        questionContainer.appendChild(questionAnswer);

        questions.appendChild(questionContainer);
    });
}

// Obligé de mettre notre eventListener ici sinon problème de scope
searchbar.addEventListener('input', displayFilteredQuestions);