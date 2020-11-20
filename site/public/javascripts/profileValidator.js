window.addEventListener('load', function(){
    

let formulario = document.querySelector('.form')
 
let inputDireccion = document.querySelector('#inputAddress2')
let inputLocalidad = document.querySelector('.localidad')
let inputProvincia = document.querySelector('#inputProvincia')


let errores={}

inputDireccion.addEventListener('blur', function(){

    switch(true){
        case this.value === "" :
        errores.nombre = "El campo dirección es obligatorio";
        errorDireccion.innerHTML = errores.nombre;
        this.classList.add('is-invalid')
        break;
        case this.value.trim().length < 3 :
        errores.nombre = "Tenes que poner al menos 3 caracteres";
        errorDireccion.innerHTML = errores.nombre;
        this.classList.add('is-invalid');
        break;
        default:
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
            errorDireccion.innerHTML= ""
            
    }
})

inputLocalidad.addEventListener('blur', function(){

    switch(true){
        case this.value === "" :
        errores.nombre = "El campo localidad es obligatorio";
        errorLocalidad.innerHTML = errores.nombre;
        this.classList.add('is-invalid')
        break;
        case this.value.trim().length < 3 :
        errores.nombre = "Tenes que poner al menos 3 caracteres";
        errorLocalidad.innerHTML = errores.nombre;
        this.classList.add('is-invalid');
        break;
        default:
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
            errorLocalidad.innerHTML= ""
            
    }
    });

    inputProvincia.addEventListener('blur', function(){

        switch(true){
            case this.value === "" :
            errores.nombre = "El campo provincia es obligatorio";
            errorProvincia.innerHTML = errores.nombre;
            this.classList.add('is-invalid')
            break;
            case this.value.trim().length < 3 :
            errores.nombre = "Tenes que poner al menos 3 caracteres";
            errorProvincia.innerHTML = errores.nombre;
            this.classList.add('is-invalid');
            break;
            default:
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                errorProvincia.innerHTML= ""
                
        }
        });




})