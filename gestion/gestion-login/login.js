/* Copyright 2024 */
function validateForm() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // Mostrar mensaje de error inicial como oculto
    let errorMessage = document.getElementById('error-message');
    errorMessage.style.display = 'none';

    // Cargar combos cuando la página se carga
    fetch("../../modulos/modulo-catalago-usuario/data-usuario.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (jsondata) {
            let users = jsondata;
            let validUser = false;

            for (let i = 0; i < users.length; i++) {
                if (users[i].nombre === username && users[i].contrasena === password) {
                    validUser = true;
                    break;
                }
            }

            if (validUser) {
                window.location.href = '../gestion-inicio/view-gestion-inicio.html';
            } else {
                errorMessage.textContent = 'Ingresa tu usuario y contraseña correctos';
                errorMessage.style.display = 'block';
            }
        })
        .catch(function (error) {
            console.error('Error al cargar los usuarios:', error);
            errorMessage.textContent = 'Error al verificar los datos del usuario.';
            errorMessage.style.display = 'block';
        });
}
