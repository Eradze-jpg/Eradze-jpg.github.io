function validateSignup(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const confirmEmail = document.getElementById('confirm-email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (email !== confirmEmail) {
        alert('Emails do not match.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }
    alert('Signup successful!');
}
function validateLogin(event) {
    event.preventDefault();
    const loginEmail = document.getElementById('login-email').value;
    const loginPassword = document.getElementById('login-password').value;
    alert('Login successful!');
}
