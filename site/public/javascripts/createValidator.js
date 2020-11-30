
window.addEventListener('load', function(){

let inputNombre=document.querySelector('#nombre')
let inputCategoria= document.querySelector('#categoria')
let inputPrecio = document.querySelector('#precio')
let inputDescripcion = document.querySelector('#descripcion')
let inputImagen = document.querySelector('#imagen')

let formulario = document.querySelector('#productAdd')

let errores = {}
let regExNum = /^[0-9]{2,8}$/;
let regExExtensions = /(.jpg|.jpeg|.png|.gif)$/i;


inputNombre.addEventListener('blur',function(){

    switch(true){
        case this.value === "" :
            errores.nombre = "El campo nombre es obligatorio";
            errorNombre.innerHTML = errores.nombre;
            this.classList.add('is-invalid')
            break;
        case this.value.trim().length <3 :
            errores.nombre = "Tenes que poner al menos 3 caracteres";
            errorNombre.innerHTML = errores.nombre;
            this.classList.add('is-invalid');  
            break;
        case this.value.trim().length > 100 : 
            errores.nombre = "No puede superar los 100 caracteres";
            errorNombre.innerHTML = errores.nombre;
            this.classList.add('is-invalid');  
            break; 
        default:
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
            errorNombre.innerHTML= ""       
    }
})
inputCategoria.addEventListener('blur', function(){

    switch(true){
        case this.value === "" :
            errores.nombre = "El campo categoria es obligatorio";
            errorCategoria.innerHTML = errores.nombre;
            this.classList.add('is-invalid')
            break;
        default:
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
            errorCategoria.innerHTML= ""
    }
})
inputPrecio.addEventListener('blur', function(){

    switch(true){
        case this.value === "" :
            errores.nombre = "El campo precio es obligatorio";
            errorPrecio.innerHTML = errores.nombre;
            this.classList.add('is-invalid')
            break;
        case this.value.trim().length < 2 :
            errores.nombre = "Tiene que tener al menos 2 cifras";
            errorPrecio.innerHTML = errores.nombre;
            this.classList.add('is-invalid')
            break;
        case this.value.trim().length > 8 :
            errores.nombre = "No puede superar las 8 cifras";
            errorPrecio.innerHTML = errores.nombre;
            this.classList.add('is-invalid')
            break;
        case !regExNum.test(this.value) :
            errores.nombre = "Solo puede ingresar numeros";
            errorPrecio.innerHTML = errores.nombre;
            this.classList.add('is-invalid')
            break;
        default:
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
            errorPrecio.innerHTML= ""
    }
})
inputDescripcion.addEventListener('blur', function(){
    switch(true){
        case this.value === "" :
            errores.nombre = "El campo descripcion es obligatorio";
            errorDescripcion.innerHTML = errores.nombre;
            this.classList.add('is-invalid')
            break; 
        case this.value.length <5 :
            errores.nombre = "Tenes que poner al menos 5 caracteres";
            errorDescripcion.innerHTML = errores.nombre;
            this.classList.add('is-invalid')
            break; 
        case this.value.length >400 :
            errores.nombre = "No puede superar los 400 caracteres";
            errorDescripcion.innerHTML = errores.nombre;
            this.classList.add('is-invalid')
            break;
        default:
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
            errorDescripcion.innerHTML= ""
    }
})
inputImagen.addEventListener('blur', function(){
    switch(true){
        case this.value === "" :
            errores.nombre = "Debe cargar una imagen";
            errorImagen.innerHTML = errores.nombre;
            this.classList.add('is-invalid')
            break;  
        case !regExExtensions.test(this.value):
            errores.nombre = "Extension no valida";
            errorImagen.innerHTML = errores.nombre;
            this.classList.add('is-invalid')
            break; 
        default:
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
            errorImagen.innerHTML= ""
        
    }
})

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    let error = false;
    let elementosForm = this.elements;
    for(let i = 0 ; i<elementosForm.length-1; i++){

        if (elementosForm[i].value == ""){
            elementosForm[i].classList.add('is-invalid');
            msgError.innerHTML = "Los campos son obligatorios"
            error = true
        }
    }
    if(!error){
        formulario.submit()
    }
})



})