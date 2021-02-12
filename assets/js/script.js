let fieldsCheck;

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

function isAddressLineCheck(dataToCheck){
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

    let street1 = document.querySelector("#street1");
    let street1Error = document.querySelector("#street1Error");

    let street2 = document.querySelector("#street2");
    let street2Error = document.querySelector("#street2Error");

    let city = document.querySelector("#city");
    let cityError = document.querySelector("#cityError");

    let postalCode = document.querySelector("#postalCode");
    let postalCodeError = document.querySelector("#postalCodeError");

    let province = document.querySelector("#province");
    let provinceError = document.querySelector("#provinceError");

    //declaring our data object
    fieldsCheck = [
        {field: firstName, checker: hasCharsCheck, error: firstNameError, msg:"* Please enter a valid first name."},
        {field: lastName, checker: hasCharsCheck, error: lastNameError, msg:"* Please enter a valid last name."},
        {field: emailAddress, checker: isEmailCheck, error: emailAddressError, msg:"* Please enter a valid email."},
        {field: phoneNumber, checker: isTelCheck, error: phoneNumberError, msg:"* Please enter a valid phone number."},
        {field: street1, checker: isAddressLineCheck, error: street1Error, msg:"* Please enter a valid address line 1."},
        {field: street2, checker: isAddressLineCheck, error: street2Error, msg:"* Please enter a valid address line 2."},
        {field: city, checker: hasCharsCheck, error: cityError, msg:"* Please enter a valid city."},
        {field: postalCode, checker: isPostalCheck, error: postalCodeError, msg:"* Please enter a valid postal code."},
        {field: province, checker: hasCharsCheck, error: provinceError, msg:"* Please select a valid province."}
    ]

    let formSubmit = document.querySelector("#submitBtn");

    formSubmit.addEventListener("click", formChecker);

}

document.addEventListener("DOMContentLoaded", function(){
    initializeForm();
})