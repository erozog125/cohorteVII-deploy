const frmEmail = document.getElementById("frm-email");
frmEmail.addEventListener("submit", sendEmail);

const serviceId = "service_psfw045";
const templateId = "template_k2o3h6r";
const apikey = "Zjo6mNYvNam9PYTZC";

function sendEmail(event) {
  event.preventDefault();
  emailjs.init(serviceId);

  emailjs
    .sendForm(serviceId, templateId, frmEmail, apikey)
    .then((result) => Swal.fire("Su mensaje se ha enviado con éxito."))
    .catch((error) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No ha sido posible enviar el mensaje!",
      });
    });
}
