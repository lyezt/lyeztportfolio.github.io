if (!localStorage.getItem('alertShown')) {
    alert('Welcome to my website!');
    localStorage.setItem('alertShown', 'true');
}

document.querySelector('form').addEventListener('submit', function (event) {
    // Prevent the default form submission
    event.preventDefault();

    var name = document.querySelector('[name="name"]').value;
    var email = document.querySelector('[name="email"]').value;
    var message = document.querySelector('[name="message"]').value;

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Please fill in all required fields.');
    } else {
        alert('Thank you, ' + encodeURIComponent(name) + '! Your message has been submitted.');
    }
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbx5yKUO1OPKdGx9MYm-m9SD52UZzZhxkpvhqmpTRNNjB4ERxIFRxv7T-DLAULIXSnmQUw/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
});



