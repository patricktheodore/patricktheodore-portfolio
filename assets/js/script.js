const projectsLinkBtn = $('#see-my-projects-btn');

projectsLinkBtn.on('click', function(event) {
    event.preventDefault(); 
    document.location = './portfolio.html';
});

const githubBtn = $('#featured-github-modal-btn');
const deployedAppModalBtn = $('#featured-deployed-modal-btn'); 

githubBtn.on('click', function() {
    window.open('https://github.com/patricktheodore/rental-reviewer', '_blank')
});

deployedAppModalBtn.on('click', function() {
    window.open('https://rocky-cove-88046.herokuapp.com/', '_blank')
});

const hiBtn = $('#hero-overlay-title');
const heroOverlay = $('#hero-overlay');

hiBtn.hover(function() {
    $(this).text('').addClass('fas fa-chevron-down fa-5x').css('cursor', 'pointer');
}, function() {
    $(this).text('hi').removeClass('fas fa-chevron-down fa-5x');
});

hiBtn.on('click', function() {
    // document.location = './index.html#about'
    $('.custom-banner').hide();
});

// const profilePic = $('#about-image');   ----- works, just need to update images and respective paths

// profilePic.hover(function() {
//     $(this).attr('src', './assets/images/schteevvie.jpeg');
// }, function() {
//     $(this).attr('src', './assets/images/IMG_3038.jpg')
// });

