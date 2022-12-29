emailjs.init("57DvOsKIs3wjsYa83");

const form = document.getElementById("contact-form1");
console.log(form);
console.log(form.elements);
form.addEventListener("submit", (event) => {
  event.preventDefault(); // prevent the form from submitting

  const name = form.elements.fullname.value;
  const email = form.elements.email.value;

  const message = form.elements.message.value + email;

  emailjs
    .sendForm("service_2u5yc8q", "template_txo275o", form)
    .then(() => {
      // success message
      alert("Email sent successfully!");
    })
    .catch((error) => {
      // error message
      alert("Error sending email: " + error);
    });
});
