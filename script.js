function validateForm() {
    var fname = document.forms["myForm"]["fname"].value;
    if (fname == "" || fname == null) {
        alert("First name must be filled out");
        return false;
    }
    var lname = document.forms["myForm"]["lname"].value;
    if (lname == "" || lname == null) {
        alert("Last name must be filled out");
        return false;
    }
    var email = document.forms["myForm"]["email"].value;
    if (email == "" || email == null) {
        alert("Email must be filled out");
        return false;
    }
    var phone = document.forms["myForm"]["phone"].value;
    if (phone == "" || phone == null) {
        alert("Phone Number must be filled out");
        return false;
    }
    var occupation = document.forms["myForm"]["occupation"].value;
    if (occupation == "" || occupation == null) {
        alert("Occupation must be filled out");
        return false;
    }
    var x = document.getElementById('email');
    var atpos = x.value.indexOf("@");
    var dotpos = x.value.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
        alert("Not a valid e-mail address");
        return false;
    }
}