/* 
 * Author: Gabriel Chávez
 * Website: https://gabrielchavez.me
 */

const $form = document.querySelector('#form');
const buttonSubmit = document.querySelector('#submit');
const urlDesktop = 'https://web.whatsapp.com/';
const urlMobile = 'whatsapp://';
const phone = '50672037464';


$form.addEventListener('submit', (event) => {
    event.preventDefault()
    buttonSubmit.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>'
    buttonSubmit.disabled = true

    setTimeout(() => {
        let name = document.querySelector('#name').value
        let lastname = document.querySelector('#lastname').value
        let email = document.querySelector('#email').value
        let message = 'send?phone=' + phone + '&text=*_Formulario Alonso Viales_*%0A*Contacto*%0A%0A*¿Cual es tu nombre?*%0A' + name + '%0A*¿Cuáles son tus apellidos?*%0A' + lastname + '%0A*¿Cuál es tu correo?*%0A' + email + ''


        if (isMobile()) {
            window.open(urlMobile + message, '_blank')
        } else {
            window.open(urlDesktop + message, '_blank')
        }

        buttonSubmit.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar WhatsApp'
        buttonSubmit.disabled = false

    }, 4000);

});