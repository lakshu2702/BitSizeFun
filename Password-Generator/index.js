const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
let password1Element = document.getElementById('passwrd1');
let password2Element = document.getElementById('passwrd2');
const length = 12;

function generatepass() {
    let password1 = '';
    let password2 = '';

    for (let i = 0; i < length; i++) {
        password1 += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    for (let i = 0; i < length; i++) {
        password2 += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    password1Element.textContent = password1;
    password2Element.textContent = password2;
}