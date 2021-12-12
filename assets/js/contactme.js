$('#email-form').on('submit', submitHandler);

function submitHandler(event) {
    event.preventDefault();

    // grab email
    const email = $("#emailInput").val()

    // grab name
    const name = $("#nameInput").val()
    // grab query
    const textarea = $("#textareaInput").val();

    // validation regex for email. 
    if (!validateEmail(email)) {
        Swal.fire("oh no!", "please enter a valid email.", "error"); //sweet alert library (bootstrap dialogues, modals?)
        return
    }

    if (name === '') {
        Swal.fire("ooops!", "please enter your name.", "error");
        return
    }

    if (textarea === '') {
        Swal.fire("bugger!", "please write a comment so i know how to respond.", "error");
        return
    }

    resetForm();

    const payload = {
        'entry.1456617042': email,
        'entry.137476477': name,
        'entry.1337743317': textarea,
    }
    const formdata = new FormData();

    for (const key in payload) {

        formdata.append(key, payload[key])

    }

    // send request
    fetch('https://docs.google.com/forms/u/0/d/e/1FAIpQLSfaif8aM506w6fEVixhOcXswHaVZoiZiq1UCZIqLYwTeuWqpA/formResponse', {
        method: 'POST',
        headers: {
            origin: "https://docs.google.com",
            referer: "https://docs.google.com/forms/d/e/1FAIpQLSfaif8aM506w6fEVixhOcXswHaVZoiZiq1UCZIqLYwTeuWqpA/viewform",
        },
        body: formdata,
    }).then((response) => {
        if (response.status === 200) {
            // suceess
            // clear the fields
            email.val('');
            name.val('');
            textarea.val('');
        } else {
            // failure
        }
    })
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function resetForm() {
    $('#emailInput').val('');
    $('#nameInput').val('');
    $('#textareaInput').val('');

    Swal.fire({
        title: "Message Sent!",
        text: "Thank you!",
        icon: "success",
        button: "Aww yiss!",
    });
}


$('#resume-btn').on('click', (event) => {
    event.preventDefault();

    Swal.fire({
        title: 'Would you like to download a copy of my resume?',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: 'Download!',
        denyButtonText: 'Cancel',
        footer: '<a href="https://drive.google.com/file/d/1CCP2GT1o6WA-sjPqbClR3PsP5UcT9Sff/view?usp=sharing" target="_blank">View on Google Docs Instead.</a>'
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            Swal.fire('Success! I look forward to hearing from you.', '', 'success');
            var link = document.createElement('a');
            link.href = './assets/dist/patrick sara - resume.pdf';
            link.download = 'patricktheodore - resume.';
            link.dispatchEvent(new MouseEvent('click'));

        } else if (result.isDenied) {
            Swal.fire("OK, don't then... but just know... you have hurt my feelings.", '', 'error')
        }
    }) //code a download and a view link
}
);


//google recaptcha