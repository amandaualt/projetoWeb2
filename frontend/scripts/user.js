function isValidValues(name, email, password, passwordConfirm) {
    let isValidValues = true;
    if (!validator.isEmail(email, 'red')) {
        isValidValues = false;
    }


    if (!validator.validate(name, 'red')) {
        isValidValues = false;
    }

    if (!validator.comparePasswords(password, passwordConfirm, 'red')) {
        isValidValues = false;
    }

    return isValidValues;
}
function register() {
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let passwordConfirm = document.getElementById('passwordConfirm');

    if (isValidValues(name, email, password, passwordConfirm)) {
        axios.post("https://animalfacts-1.herokuapp.com/auth/register", {
            name: name.value,
            email: email.value,
            password: password.value
        }, (res) => {
            window.localStorage.setItem('token', res.token);
            window.localStorage.setItem('user', res.user.email);
            redirect('facts.html');
        }).catch((err) => {

        });
    }
}


