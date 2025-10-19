(function () {
  emailjs.init("a13sVIFr6Uc1mg8Ds"); // <-- reemplaza con tu Public Key
})();

function enviarCorreo(e) {
    e.preventDefault();

    emailjs.sendForm("service_ij9jwap", "template_iw72nyr", "#formulario").then(
    function () {
        alert("Mensaje enviado correctamente ✅");
        document.getElementById("formulario").reset();
    },
    function (error) {
        alert("Ocurrió un error ❌: " + JSON.stringify(error));
    }
    );
}
