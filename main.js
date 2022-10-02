const btn = document.querySelector('#submit');

const pass1 = document.querySelector('#pass1');
const pass2 = document.querySelector('#pass2');
const error_message = document.querySelector('#error');

btn.addEventListener('click', (event) => {
    if (pass1.value !== pass2.value) {
        event.preventDefault();
        pass1.classList.add('error');
        pass2.classList.add('error');
        error_message.classList.add('error-message');
    }
})

pass1.addEventListener('focus', () => {
    pass1.classList.remove('error');
    pass2.classList.remove('error');
    error_message.classList.remove('error-message');
});

pass2.addEventListener('focus', () => {
    pass1.classList.remove('error');
    pass2.classList.remove('error');
    error_message.classList.remove('error-message');
});