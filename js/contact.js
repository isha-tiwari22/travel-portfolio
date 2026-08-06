const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const subject = document.getElementById("subject").value.trim();

    const text = document.getElementById("message").value.trim();

    if(name === "" || email === "" || subject === "" || text === ""){

        message.style.color = "red";

        message.textContent = "Please fill in all fields.";

        return;

    }

    message.style.color = "green";

    message.textContent = "Message sent successfully!";

    form.reset();

});