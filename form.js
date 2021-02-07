const login = () => {
    let userNameInput = document.getElementById('auth_user_name').value;
    let passwordInput = document.getElementById('auth_password').value;
    let isAuthCheckboxChecked = document.getElementById('auth_checkbox').checked;

    let validationError = validate(userNameInput, passwordInput, isAuthCheckboxChecked);
    if (validationError == undefined) {
    // логин процесс   
    } else {
    
       // console.log('validation', validationError);
    }
    
    
    console.log("on press", userNameInput, passwordInput)
}

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