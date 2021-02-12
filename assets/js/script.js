let fieldsCheck;
let formContainer = document.querySelector(".formContainer");
let confirmContainer = document.querySelector(".confirmContainer");


function hasCharsCheck(dataToCheck){
    let pattern = /^[a-zA-Z]+$/;

    if(pattern.test(dataToCheck.field.value)){
        return true;
    }
    return false;
}

function hasNumsCheck(dataToCheck){
    let pattern = /^[0-9]+$/;

    if(pattern.test(dataToCheck.field.value)){
        return true;
    }
    return false;
}

function isEmailCheck(dataToCheck){
    let pattern = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(pattern.test(dataToCheck.field.value)){
        return true;
    }
    return false;
}

function isTelCheck(dataToCheck){
    let pattern = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

    if(pattern.test(dataToCheck.field.value)){
        return true;
    }
    return false;
}

function isStreetCheck(dataToCheck){
    let pattern = /^(?:[Pp][Oo]\s[Bb][Oo][Xx]|[0-9]+)\s(?:[0-9A-Za-z\.'#]|[^\S\r\n])+/;

    if(pattern.test(dataToCheck.field.value)){
        return true;
    }
    return false;
}

function isPostalCheck(dataToCheck){
    let pattern = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;

    if(pattern.test(dataToCheck.field.value)){
        return true;
    }
    return false;
}

function isCheckboxChecked(dataToCheck){
    
    console.log(dataToCheck);

    if(dataToCheck.field.checked==true){
        return true;
    }

    return false;
}


function errorsReset(){
    fieldsCheck.forEach(inputField =>{
        inputField.error.innerText = "";
    });
}


function formChecker(e){
    console.log("button clicked");
    let errorsDetected = 0;
    errorsReset();
    e.preventDefault();

    // automated error checking
    fieldsCheck.forEach(inputField => {
        if(inputField.checker(inputField)==false){
            inputField.error.innerText = inputField.msg;
            errorsDetected +=1;
        }
    });

    if(errorsDetected==0){
        console.log("no errors");
        formContainer.style.display = "none";
        confirmContainer.style.display = "block";
    }


}


function initializeForm(){
    
    //grabbing our 12 input and error fields
    let firstName = document.querySelector("#firstName");
    let firstNameError = document.querySelector("#firstNameError");

    let lastName = document.querySelector("#lastName");
    let lastNameError = document.querySelector("#lastNameError");

    let emailAddress = document.querySelector("#emailAddress");
    let emailAddressError = document.querySelector("#emailAddressError");

    let phoneNumber = document.querySelector("#phoneNumber");
    let phoneNumberError = document.querySelector("#phoneNumberError");

    let street = document.querySelector("#street1");
    let streetError = document.querySelector("#street1Error");

    let city = document.querySelector("#city");
    let cityError = document.querySelector("#cityError");

    let postalCode = document.querySelector("#postalCode");
    let postalCodeError = document.querySelector("#postalCodeError");

    let province = document.querySelector("#province");
    let provinceError = document.querySelector("#provinceError");

    let termsCheckbox = document.querySelector("#termsCheckbox");
    let termsCheckboxError = document.querySelector("#termsCheckboxError");

    //declaring our data object
    fieldsCheck = [
        {field: firstName, checker: hasCharsCheck, error: firstNameError, msg:"* Please enter a valid first name."},
        {field: lastName, checker: hasCharsCheck, error: lastNameError, msg:"* Please enter a valid last name."},
        {field: emailAddress, checker: isEmailCheck, error: emailAddressError, msg:"* Please enter a valid email."},
        {field: phoneNumber, checker: isTelCheck, error: phoneNumberError, msg:"* Please enter a valid phone number."},
        {field: street, checker: isStreetCheck, error: streetError, msg:"* Please enter a valid address line 1."},
        {field: city, checker: hasCharsCheck, error: cityError, msg:"* Please enter a valid city."},
        {field: postalCode, checker: isPostalCheck, error: postalCodeError, msg:"* Please enter a valid postal code."},
        {field: province, checker: hasCharsCheck, error: provinceError, msg:"* Please select a valid province."},
        {field: termsCheckbox, checker: isCheckboxChecked, error: termsCheckboxError, msg:"* Please accept terms to continue."},
    ]

    let formSubmit = document.querySelector("#formSubmitBtn");

    formSubmit.addEventListener("click", formChecker);

}

document.addEventListener("DOMContentLoaded", function(){
    initializeForm();
})