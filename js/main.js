// Document is ready
$(document).ready(function () {
// Validate Username
    $("#usercheck").hide();

    $("#usernames").keyup(function () {
        validateUsername();
    });
    usernameError = false;
    function validateUsername() {
        let usernameValue = $("#name").val();
        if (usernameValue.length == "") {
            $("#usercheck").show();
            usernameError = false;
            return false;
        } else if (usernameValue.length < 3 || usernameValue.length > 30) {
            $("#usercheck").show();
            $("#usercheck").html("**length of username must be between 3 and 10");
            usernameError = false;
            return false;
        } else {
            usernameError = true;
            $("#usercheck").hide();
        }
    }

// Validate Email
    emailError = false;
    const email = document.getElementById("email");
    email.addEventListener("blur", () => {
        let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
        let s = email.value;
        if (regex.test(s)) {
            email.classList.remove("is-invalid");
            emailError = true;
        } else {
            email.classList.add("is-invalid");
            emailError = false;
        }
    });

    function EmailVailid() {
        if(  emailError == false)
            email.classList.add("is-invalid");
        else
            email.classList.remove("is-invalid");
    }

// Validate Password
    $("#passcheck").hide();
    let passwordError = true;
    $("#password").keyup(function () {
        validatePassword();
    });
    function validatePassword() {
        let passwordValue = $("#password").val();
        if (passwordValue.length == "") {
            $("#passcheck").show();
            passwordError = false;
            return false;
        }
        if (passwordValue.length < 3 || passwordValue.length > 10) {
            $("#passcheck").show();
            $("#passcheck").html(
                "**length of your password must be between 3 and 10"
            );
            $("#passcheck").css("color", "red");
            passwordError = false;
            return false;
        } else {
            passwordError =true;
            $("#passcheck").hide();
        }
    }


// Submit login button
    $("#submitlogin").click(function (e) {
        validatePassword();
        EmailVailid();
        if (
            passwordError == true && emailError == true
        ) {
            toastr.success('Successfuly Login');
            return true;
        } else {
            toastr.error(' Please Fill the data correctly');
            return false;
        }
    });


// submit register button
$("#submitregister").click(function (e) {
    validatePassword();
    EmailVailid();
    validateUsername();
    if (
        usernameError == true && passwordError == true && emailError == true
    ) {
        return true;
    } else {
        toastr.error(' Please Fill the data correctly');
        return false;
    }

});

});