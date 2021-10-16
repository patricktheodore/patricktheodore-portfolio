const weatherGitBtn = $('#weather-github-modal-btn'); 
const weatherAppBtn = $('#weather-deployed-modal-btn');

weatherGitBtn.on('click', function() {
    window.open('https://github.com/patricktheodore/weather-dash', '_blank')
});

weatherAppBtn.on('click', function() {
    window.open('https://patricktheodore.github.io/weather-dash/', '_blank')
});

