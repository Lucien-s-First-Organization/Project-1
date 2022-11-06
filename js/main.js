const wrong_img = '<img src="img/cross-512.webp" alt="">'  //string that holds the remove sign simbolyzing error
const right_img = '<img src="img/check-mark-clip-art-transparent-background-23.webp" alt="">'  //string that holds the correct image

function validate_firstname() {
    /*
     * Function that validates the firstname field
     */
    writer_span = document.getElementById("fname-span")
    writer_text = document.getElementById("fname-small")
    const fname = fnameOBJ.value //read element's value
    if (fname === ""){  //check if input field is blank
        writer_text.innerHTML = "Firstname cannot be blank"
        writer_span.innerHTML = wrong_img
    }else if(fname.length < 3){  //check if input length is less than 3 characters
        writer_text.innerHTML = "Firstname is too short.."  //write the error message to form
        writer_span.innerHTML = wrong_img
    }else { //if everything is correct
        writer_text.innerHTML = ""  //remove the error message just incase it was written
        writer_span.innerHTML = right_img  //print the image of "correct" to symbolyze all is well for that field
    }
}

function validate_middlename() {
    /*
     * Function that validates the middlename field
     */
    writer_span = document.getElementById("mname-span")
    const mname = mnameOBJ.value //read element's value
    if (mname.length > 0){
        writer_span.innerHTML = right_img
    }else {
        writer_span.innerHTML = ""
    }
}

function validate_surname() {
    /*
     * Function that validates the surname field
     */
    writer_span = document.getElementById("sname-span")
    writer_text = document.getElementById("sname-small")
    const sname = snameOBJ.value //read element's value
    if (sname === "") {
        writer_text.innerHTML = "Surname cannot be blank"
        writer_span.innerHTML = wrong_img
    } else if (sname.length < 3) {
        writer_text.innerHTML = "Surname is too short.."
        writer_span.innerHTML = wrong_img
    } else {
        writer_text.innerHTML = ""
        writer_span.innerHTML = right_img
    }
}

function validate_address() {
    /*
     * Function that validates the physical address field
     */
    writer_span = document.getElementById("address-span")
    const address = addressOBJ.value //read element's value
    if (address.length > 0){
        writer_span.innerHTML = right_img
    }else {
        writer_span.innerHTML = ""
    }
}

function validate_phone() {
    /*
     * Function that validates the mobile phone field
     */
    writer_span = document.getElementById("phone-span")
    writer_text = document.getElementById("phone-small")
    const phone = phoneOBJ.value //read element's value
    if (phone.length === 13){
        writer_span.innerHTML = right_img
        writer_text.innerHTML = ""
    }else {
        writer_span.innerHTML = wrong_img
        writer_text.innerHTML = "Invalid Phone Number..."
    }
}
function validate_email() {
    /*
     * Function that validates the email address field
     */
    writer_span = document.getElementById("email-span")
    writer_text = document.getElementById("email-small")
    const email = emailOBJ.value //read element's value
    if (email.length >0 && email.includes("@") && email.includes(".")){
        writer_span.innerHTML = right_img
        writer_text.innerHTML = ""
    }else {
        writer_span.innerHTML = wrong_img
        writer_text.innerHTML = "Invalid Email Address..."
    }
}
function validate_username() {
    /*
     * Function that validates the username field
     */
    writer_span = document.getElementById("user-span")
    writer_text = document.getElementById("user-small")
    const username = usernameOBJ.value //read element's value
    if (username.length >=5){
        writer_span.innerHTML = right_img
        writer_text.innerHTML = ""
    }else {
        writer_span.innerHTML = wrong_img
        writer_text.innerHTML = "Invalid Username..."
    }
}
function validate_password() {
    /*
     * Function that validates the password field
     */
    writer_span = document.getElementById("pwd-span")
    writer_text = document.getElementById("pwd-small")
    const password = passwordOBJ.value //read element's value
    if (password.length === 0){
        writer_span.innerHTML = wrong_img
        writer_text.innerHTML = "Password field cannot be empty"
    }
    else if (password.length >=8){
        writer_span.innerHTML = right_img
        writer_text.innerHTML = ""
    }else {
        writer_span.innerHTML = wrong_img
        writer_text.innerHTML = "Password too short..."
    }
}
function validate_confirm_password() {
    /*
     * Function that validates the confirm-password field
     */
    writer_span = document.getElementById("con-pwd-span")
    writer_text = document.getElementById("con-pwd-small")
    const confirm_password = cpasswordOBJ.value //read element's value
    if (confirm_password.length === 0){
        writer_span.innerHTML = wrong_img
        writer_text.innerHTML = "Password field cannot be empty"
    }
    else if (confirm_password.length >=8 && passwordOBJ.value === confirm_password){
        writer_span.innerHTML = right_img
        writer_text.innerHTML = ""
    }else if (confirm_password.length < 0){
        writer_span.innerHTML = wrong_img
        writer_text.innerHTML = "Password too short..."
    }else{
        writer_span.innerHTML = wrong_img
        writer_text.innerHTML = "The 2 passwords don't match..."
    }
}

document.addEventListener("DOMContentLoaded", ()=>{  //Execute this section only if the html file has finished to load
    fnameOBJ = document.getElementById("fname")
    fnameOBJ.addEventListener("change", validate_firstname) // call the validation functions

    mnameOBJ = document.getElementById("mname") //
    mnameOBJ.addEventListener("change", validate_middlename)  //Add event listener to event to execute when a change is detected

    snameOBJ = document.getElementById("sname")
    snameOBJ.addEventListener("change", validate_surname)  //trigger the validation for the surname field

    addressOBJ = document.getElementById("address")
    addressOBJ.addEventListener("change", validate_address)  //trigger the validation for the physical address field

    phoneOBJ = document.getElementById("phone")
    phoneOBJ.addEventListener("change", validate_phone)  //trigger the validation for the mobile phone field

    emailOBJ = document.getElementById("email")
    emailOBJ.addEventListener("change", validate_email)  //trigger the validation for the email assress field

    usernameOBJ = document.getElementById("username")
    usernameOBJ.addEventListener("change", validate_username)  //trigger the validation for the username field

    passwordOBJ = document.getElementById("password")
    passwordOBJ.addEventListener("change", validate_password)  //trigger the validation for the password field

    cpasswordOBJ = document.getElementById("confirm-password")
    cpasswordOBJ.addEventListener("change", validate_confirm_password)  //trigger the validation for the confirm password field
})