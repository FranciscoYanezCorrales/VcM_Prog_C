document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault();
        enviarCorreo();
        alert("¡El correo ha sido enviado con éxito!");
        document.getElementById("nombre").value = "";
        document.getElementById("email").value = "";
        document.getElementById("mensaje").value = "";
    });
});

function enviarCorreo() {

    console.log("Correo electrónico enviado a francisco.yanez@edu.ipchile.cl");
}
