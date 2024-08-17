'use strict';

window.addEventListener('load', init, false);

function init() {
    const emailInput = document.getElementById('inscriptionTxt');
    const btnEnviar = document.getElementById('btnSend');
    const expressionEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    btnEnviar.onclick = function() {
        const email = emailInput.value.trim();

        if (email === '') {
            showAlert('El campo email está vacío', 'error');
        } else if (!expressionEmail.test(email)) {
            showAlert('Email inválido', 'error');
        } else {
            showAlert('Su registro fue exitoso', 'success');
            sendEmail();
            cleanInputs();
        }
    }

    function showAlert(message, type) {
        Swal.fire({
            icon: type,
            title: type === 'success' ? '¡Éxito! Se ha enviado el correo' : 'Error, debes ingresar un correo',
            text: message,
            confirmButtonText: 'OK',
            confirmButtonColor: '#0063be',
            timer: type === 'success' ? 3000 : null,
        });
    }

    function sendEmail() {
        emailjs.sendForm('service_1jmgqra', 'template_9rtcwng', '#inscription', 'Eu8tNcpsGjTkLB_YM')
            .then(() => console.log('Email enviado con éxito'))
            .catch(error => console.error('Error al enviar el email:', error));
    }

    function cleanInputs() {
        emailInput.value = '';
    }
}
