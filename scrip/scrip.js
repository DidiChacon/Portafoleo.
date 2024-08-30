




const nombre= document.querySelector("#nombre");
const telefono=  document.querySelector("#tel");
const correo= document.querySelector("#email");
const mensaje= document.querySelector("#men");
const formulario= document.querySelector(".contacto");
formulario.addEventListener('submit', validarformulario);

function validarformulario(e) {
    e.preventDefault();
    
}