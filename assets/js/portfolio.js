const weatherGitBtn = $('#weather-github-modal-btn'); 
const weatherAppBtn = $('#weather-deployed-modal-btn');

weatherGitBtn.on('click', function() {
    window.open('https://github.com/patricktheodore/weather-dash', '_blank')
});

weatherAppBtn.on('click', function() {
    window.open('https://patricktheodore.github.io/weather-dash/', '_blank')
});

const dayPlannerGitBtn = $('#day-planner-github-modal-btn'); 
const dayPlannerAppBtn = $('#day-planner-deployed-modal-btn');

dayPlannerGitBtn.on('click', function() {
    window.open('https://github.com/patricktheodore/work-day-scheduler', '_blank')
});

dayPlannerAppBtn.on('click', function() {
    window.open('https://patricktheodore.github.io/work-day-scheduler/', '_blank')
});

const jsQuizGitBtn = $('#js-quiz-github-modal-btn'); 
const jsQuizAppBtn = $('#js-quiz-deployed-modal-btn');

jsQuizGitBtn.on('click', function() {
    window.open('https://github.com/patricktheodore/jsquiz', '_blank')
});

jsQuizAppBtn.on('click', function() {
    window.open('https://patricktheodore.github.io/jsquiz/', '_blank')
});

const passwordGeneratorGitBtn = $('#password-generator-github-modal-btn'); 
const passwordGeneratorAppBtn = $('#password-generator-deployed-modal-btn');

passwordGeneratorGitBtn.on('click', function() {
    window.open('https://github.com/patricktheodore/random-password-generator', '_blank')
});

passwordGeneratorAppBtn.on('click', function() {
    window.open('https://patricktheodore.github.io/random-password-generator/', '_blank')
});

const prickRollGitBtn = $('#rick-roll-github-modal-btn'); 
const prickRollAppBtn = $('#rick-roll-deployed-modal-btn');

prickRollGitBtn.on('click', function() {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank')
});

prickRollAppBtn.on('click', function() {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank')
});

const contactBtn = $('#contact-btn'); 

contactBtn.on('click', function() {
   document.location = './contact.html' 
})