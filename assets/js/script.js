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

const hiBtn = $('#hero-overlay-title');
const heroOverlay = $('#hero-overlay');

hiBtn.hover(function() {
    $(this).text('').addClass('fas fa-chevron-down fa-5x').css('cursor', 'pointer');
}, function() {
    $(this).text('hi').removeClass('fas fa-chevron-down fa-5x');
});

hiBtn.on('click', function() {
    document.location = './index.html#about'
});

