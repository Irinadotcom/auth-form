const login = () => {
    let userNameInput = document.getElementById('auth_user_name').value;
    let passwordInput = document.getElementById('auth_password').value;
    let isAuthCheckboxChecked = document.getElementById('auth_checkbox').checked;

    let validationError = validate(userNameInput, passwordInput, isAuthCheckboxChecked);
    if (validationError == undefined) {
        // логин процесс 
        console.log("You are logged in");
    } else {
        showError(validationError);
    }
}

const showError = (validationError) => {
    let errorSpan = document.getElementById('error');

    // console.log('validation', validationError);
    errorSpan.innerHTML = validationError;
    errorSpan.className = 'error';

    setTimeout(hideError, 1000);
}


const hideError = () => {
    document.getElementById('error').className = 'empty-error';

    
}


document.getElementById("btn").addEventListener("click", function (e) {
    e.preventDefault();
    login();
});

const validate = (userName, password, isPolicyChecked) => {
    if (userName != "" && password != "" && isPolicyChecked) {

        let regex = new RegExp('[a-zA-Z]');

        let isUserName = regex.test(userName);
        if (isUserName == false) {
            return 'Please enter user name by only characters.';
        }

        let isPassword = (password.length > 5) ? true : false;
        if (isPassword == false) {
            return 'Enter password with lengh greater then 5.';
        }

    } else {

        return 'Please enter and check all fields!';
    }
}