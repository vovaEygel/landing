// change alerts to modal later
function submit(e) {
    console.log(e)
}

function validate(e) {

    e.preventDefault();

    const userMail = document.mainForm.email.value;

    console.log(userMail)
    if (document.mainForm.fullName.value == "") {
        alert("Please provide your name!");
        document.mainForm.FullName.focus();
        return false;
    }
    if (userMail == "") {
        alert("Please provide your email!");
        document.mainForm.email.focus();
        return false;
    }
    return (true);
}