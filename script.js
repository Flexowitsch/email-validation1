// consts for the interface
const emailInput = document.getElementById("emailInput")
const submitBtn = document.getElementById("submitBtn")
const errorMessage = document.getElementById("errorLabel")
const errorIcon = document.getElementById("errorIcon")

let userEmail = ""




// regex for checking email

let checkRegEx = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/g;



submitBtn.addEventListener("click", function() {
    console.log("email entered")
    userEmail = emailInput.value
    let isValid = userEmail.match(checkRegEx)

    console.log(userEmail)
    console.log("test" + isValid)

    if(isValid === null) {
     errorMessage.style.display = "block"
     errorIcon.style.display = "block"
     emailInput.style.border = "2px solid var(--red)"
    } else {
        localStorage.setItem("userEmail", userEmail)
        emailInput.value = ""
    }
} )