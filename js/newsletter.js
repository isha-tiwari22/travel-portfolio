const newsletterForm =
document.getElementById("newsletterForm");

const newsletterMessage =
document.getElementById("newsletterMessage");

newsletterForm.addEventListener("submit",(e)=>{

    e.preventDefault();

    const email =
    document.getElementById("newsletterEmail").value;

    if(email===""){

        newsletterMessage.style.color="red";

        newsletterMessage.textContent="Please enter your email.";

        return;

    }

    newsletterMessage.style.color="green";

    newsletterMessage.textContent="Thanks for subscribing!";

    newsletterForm.reset();

});