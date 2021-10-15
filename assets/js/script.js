const projectsLinkBtn = $('#see-my-projects-btn');

projectsLinkBtn.on('click', function(event) {
    event.preventDefault(); 
    document.location = './portfolio.html';
});

const githubBtn = $('#github-modal-btn');
const deployedAppModalBtn = $('#deployed-modal-btn'); 

githubBtn.on('click', function() {
    window.open('https://github.com/patricktheodore/football-highlights-dashboard', '_blank')
});

deployedAppModalBtn.on('click', function() {
    window.open('https://patricktheodore.github.io/football-highlights-dashboard/', '_blank')
});