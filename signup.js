document.getElementById("signupForm").addEventListener("submit", function(e) {

    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    // Simulate saving data
    localStorage.setItem("signup_name", name);
    localStorage.setItem("signup_email", email);

    // Show thank you page
    document.body.innerHTML = `
        <div style="
            height:100vh;
            display:flex;
            justify-content:center;
            align-items:center;
            background:#ccc;
            font-size:2rem;
            text-align:center;
            padding:20px;
        ">
            Thank you. One of our board will contact you soon. If you don't hear
            from us within 48 hours, please reach out via the contact page.
        </div>
    `;

    // Redirect after 7 seconds
    setTimeout(() => {
        window.location.href = "agapehodosmainhub.html";
    }, 7000);

});
