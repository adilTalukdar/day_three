document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstname = document.getElementById('firstname').value.trim();
    const lastname = document.getElementById('lastname').value.trim();
    const email = document.getElementById('email').value.trim();
    const country = document.getElementById('country').value.trim();
    const address = document.getElementById('address').value.trim();
    const city = document.getElementById('city').value.trim();

    if (!firstname || !lastname || !email || !country || !address || !city) {
        alert("All fields are required!");
        return;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address!");
        return;
    }

    document.getElementById('message').textContent = "Registration complete!";
    document.getElementById('registrationForm').reset();
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
