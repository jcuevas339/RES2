function validar(form) {
    var msg = validarNombre(form.txtNombre.value);
    msg += validarNoEmpleado(form.txtNoEmpleado.value);
    msg += validarPasswords(form.txtPass.value, form.confirmPass.value);


    if (msg != '') {
        document.getElementById("notificaciones").style.display = 'block';
        document.getElementById("notificaciones").setAttribute("class", "alert alert-danger")
        return false

    }
    else {
        document.getElementById("notificaciones").style.display = 'none';
        document.getElementById("notificaciones").innerHTML = '';
        return Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'USUARIO AGREGADO',
            showConfirmButton: false,
            timer: 1500
        });
    }
}
function validarNombre(cad) {
    if (cad.length == 0) {
        return Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debes ingresar un nombre',
        })
    }
    return (cad.length == 0) ? 'Debes informar el nombre del Empleado<br>' : '';


}
function validarNoEmpleado(cad) {
    if (cad.length == 6)
        return '';
    else
        return Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El numero de empleado no es correcto',
        }); ;
}
function validarPasswords(pwd, cpwd) {
    if (pwd != cpwd) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Las contraseñas no coinciden!',
        });
    } else
        return (pwd != cpwd) ? '<br>Las contraseñas no coinciden<br>' : '';
}