function resetdata() {
    var inputFields = document.querySelectorAll("input, select, textarea");
    inputFields.forEach(function(input) {
        input.style.border = "1px solid black";
    });
    document.getElementById("userData").innerHTML = "(Your information will appear here after submission.)";
}

function display() {
    var br = "</br>";
    var userInfo = "Name: " + document.getElementById("name").value + br +
        "Username: " + document.getElementById("username").value + br +
        "Gender: " + document.getElementById("gender").value + br +
        "Password: " + document.getElementById("password").value + br +
        "Email: " + document.getElementById("email").value + br +
        "Address: " + document.getElementById("address").value + br +
        "Interests: " + document.getElementById("interests").value + br;

    document.getElementById("userData").innerHTML = userInfo;
}

function blurR(inputElement) {
    if (inputElement.value === "" || (inputElement.tagName === "SELECT" && inputElement.value === "N/A")) {
        inputElement.style.border = "2px solid red";
    }
}

function focusG(inputElement) {
    inputElement.style.border = "1px solid #00FF7F";
}

function data() {
    display();
    return false;
}
