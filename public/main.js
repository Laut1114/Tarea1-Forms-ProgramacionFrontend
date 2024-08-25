const datos = {
    nombre: '',
    email: '',
    pais: '',
    msg: ''
}

function printData(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const pais = document.getElementById('pais').value;
    const cometario = document.getElementById('comentario').value;

    datos.nombre = nombre;
    datos.email = email;
    datos.pais = pais;
    datos.msg = cometario;

    console.log(datos);
}
