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

    let userDob = document.querySelector("#userDob");
    let userDobError = document.querySelector("#userDobError");

    let termsCheckbox = document.querySelector("#termsCheckbox");
    let termsCheckboxError = document.querySelector("#termsCheckboxError");

    //declaring our data object
    fieldsCheck = [
        {field: firstName, checker: hasCharsCheck, error: firstNameError, msg:"Please enter a valid first name."},
        {field: lastName, checker: hasCharsCheck, error: lastNameError, msg:"Please enter a valid last name."},
        {field: emailAddress, checker: hasCharsCheck, error: emailAddressError, msg:"Please enter a valid email"},
        {field: phoneNumber, checker: hasNumsCheck, error: phoneNumberError, msg:"Please enter a valid phone number."},
        {field: street1, checker: hasCharsCheck, error: street1Error, msg:"Please enter a valid Address Line 1."},
        {field: street2, checker: hasCharsCheck, error: street2Error, msg:"Please enter a valid Address Line 2."},
        {field: city, checker: hasCharsCheck, error: cityError, msg:"Please enter a valid city."},
        {field: postalCode, checker: hasCharsCheck, error: postalCodeError, msg:"Please enter a valid postal code."},
        {field: province, checker: hasCharsCheck, error: provinceError, msg:"Please select a valid province."},
        {field: userDob, checker: hasNumsCheck, error:  userDobError, msg:"Please enter a valid date of birth."},
        {field: termsCheckbox, checker: hasCharsCheck, error: termsCheckboxError, msg:"Please accept our Terms and Conditions & Privacy Policy."},
    ]

    let formSubmit = document.querySelector("#submitBtn");

    formSubmit.addEventListener("click", formChecker);

}

document.addEventListener("DOMContentLoaded", function(){
    initializeForm();
})