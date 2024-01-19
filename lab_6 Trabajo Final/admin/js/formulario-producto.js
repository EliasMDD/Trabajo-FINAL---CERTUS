const formulario = document.getElementById('formulario-producto');
const inputs = document.querySelectorAll('#formulario-producto input');
const selects = document.querySelectorAll('#formulario-producto select');

const expresiones = {
    inputModelo: /^[0-9]{1,6}$/,
    inputProducto: /^.{4,40}$/,
    inputDetalle: /^.{10,100}$/,
    inputPeso: /^[0-9.]{1,6}$/,
    inputMaterial: /^.{1,15}$/,
    inputStock: /^[0-9]{1,6}$/
};

const campos = {
    inputProducto: false,
    inputModelo: false,
    inputDetalle: false,
    inputPeso: false,
    inputMaterial: false,
    inputStock: false,
    inputTalla: false,
    inputImagen: false
};

const validarCampo = (expresion, input, campo) => {
    const elemento = document.getElementById(campo);
    elemento.classList.toggle('is-valid', expresion.test(input.value));
    elemento.classList.toggle('is-invalid', !expresion.test(input.value));
    campos[campo] = expresion.test(input.value);
};

const validarFormulario = (e) => {
    const { name, value } = e.target;
    
    if (name === 'inputTalla' || name === 'inputImagen') {
        const elemento = document.getElementById(name);
        elemento.classList.toggle('is-valid', value !== '');
        elemento.classList.toggle('is-invalid', value === '');
        campos[name] = value !== '';
        return;
    }

    validarCampo(expresiones[name], e.target, name);
};

const agregarEventos = (elementos) => {
    elementos.forEach((elemento) => {
        elemento.addEventListener('keyup', validarFormulario);
        elemento.addEventListener('blur', validarFormulario);
    });
};

// Agregar eventos para inputs
agregarEventos(document.querySelectorAll('input'));

// Agregar eventos para selects
agregarEventos(document.querySelectorAll('select'));
