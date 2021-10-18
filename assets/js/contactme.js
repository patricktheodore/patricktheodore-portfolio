// entry.137476477: nammeee
// entry.1456617042: emaill
// entry.1337743317: commenntttt
// dlut: 1634540961476
// fvv: 1
// draftResponse: [null,null,"-124436678167771972"]
// pageHistory: 0
// fbzx: -124436678167771972

// Request URL: https://docs.google.com/forms/u/0/d/e/1FAIpQLSfaif8aM506w6fEVixhOcXswHaVZoiZiq1UCZIqLYwTeuWqpA/formResponse

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
        swal("oh no!", "please enter a valid email.", "error"); //sweet alert library (bootstrap dialogues, modals?)
        return 
    }

    if (name === '') {
        swal("ooops!", "please enter your name.", "error");
        return
    }

    if (textarea === '') {
        swal("bugger!", "please write a comment so i know how to respond.", "error");
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
        if (response.status === 200){
            // suceess
            // clear the fields
            email.val('');
            name.val('');
            textarea.val('');
        }else{
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

    swal({
        title: "Message Sent!",
        text: "Thank you!",
        icon: "success",
        button: "Aww yiss!",
      });
}


//google recaptcha