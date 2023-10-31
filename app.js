var name = document.querySelector('#username')
var email = document.querySelector('#email')
var password = document.querySelector('#password')
var confirm_password = document.querySelector('#confirm_password')
var form = document.querySelector('form')


function showError(input,message) {
    let parent = input.parentElement;
    let small = parent.querySelector('small')
    parent.classList.add('error')
    small.innerText = message
}



function showSuccess(input) {
    let parent = input.parentElement;
    let small = parent.querySelector('small')
    parent.classList.remove('error')
    small.innerText = ''
}

function checkEmptyError(listInput){
    listInput.forEach(input => {
            input.value = input.value.trim()

            if (!input.value) {
                showError(input, 'Khong duoc bo trong')
            }
            else {
                showSuccess(input)
            }
        });
}

function checkEmailError(input){
    const regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        input.value = input.value.trim()
        let isEmailError = !regexEmail.test(input.value)
        if(regexEmail.test(input.value)){
            showSuccess(input)
        }
        else{
            showError(input,'Email Invalid')
        }
        return isEmailError
}
function checkLenghtError(input, min, max){
    input.value = input.value.trim()

    
    if(input.value.lenght < min){
        showError(input, `Phai co it nhat ${min} ky tu`)
    }
    else if(input.value.lenght > max){
        showError(input, `Khong duoc qua ${max} ky tu`)
    }
    else{
        showSuccess(input)
    }
}
form.addEventListener('submit',function(e){
    e.preventDefault()

    checkLenghtError(username, 3, 10)
    checkLenghtError(password, 3, 10)
    checkEmptyError([username, email, password,confirm_password])
    checkEmailError(email)
    

})
