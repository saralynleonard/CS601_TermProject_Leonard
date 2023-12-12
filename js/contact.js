function validateForm() {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var message = document.getElementById("message")
    const namePattern = /^[a-zA-Z]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var errorMsg = document.getElementById("error-msg");

    if (name.value.length < 2) {
        errorMsg.innerHTML = "Your name must contain two or more characters."
        return false;
    } else if (message.value.length < 7) {
        errorMsg.innerHTML = "Your message must be at least 7 characters."
        return false;
    } else if (!namePattern.test(name.value)) {
        errorMsg.innerHTML = "Your name must contain alpha characters only."
        return false;
    } else if (!emailPattern.test(email.value)) {
        errorMsg.innerHTML = "You must enter a valid email address."
        return false;
    } else {
        return true;
    }
}