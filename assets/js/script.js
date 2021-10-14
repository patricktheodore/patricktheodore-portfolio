const projectsLinkBtn = $('#see-my-projects-btn');

projectsLinkBtn.on('click', function(event) {
    event.preventDefault(); 
    document.location = './portfolio.html';
})

