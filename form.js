function checkApellido(Apellido) {
    var regex = new RegExp('[a-z]{4,30}');
    if (regex.test(apell.value)) {
        alert("El apellido se ingreso correctamente")
        return true;

    } else if (apell === "") {
        alert("El apellido no se ingreso correctamente")
        return false;

    } else {
        alert("El apellido no se ingreso correctamente")
        return fales;


    };

}

module.exports = { checkApellido };