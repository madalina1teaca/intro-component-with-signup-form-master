const btn = document.getElementById('btn');
const errorIcons = document.querySelectorAll('.icon-error');
const alerts = document.querySelectorAll('.alert');

const inputs = document.querySelectorAll('input');


const checkEmptyField = value => value==="";

const showEmptyError = i => {
    errorIcons[i].style.display = 'block';
    alerts[i].style.display = 'block';
    inputs[i].classList.add = 'errorInput';
}

const showInvalidEmailError = () => {
    errorIcons[2].style.display = 'block';
    inputs[2].classList.add = 'errorInput';
    alerts[2].innerHTML = 'Looks like this is not an email';
    alerts[2].style.display = 'block';
}

const checkEmail = email => {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regEx.test(String(email).toLowerCase) 
}


btn.addEventListener('click', () => {

    // check each field
    for ( let i=0; i < inputs.length; i++) {
        if( checkEmptyField(inputs[i].value)) {
            showEmptyError(i);
        } 
    }

    if (!checkEmail(inputs[2].value)) {
        showInvalidEmailError();
    }

})