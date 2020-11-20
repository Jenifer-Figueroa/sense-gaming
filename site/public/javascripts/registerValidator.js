window.addEventListener('load', function(){

let nombre = document.querySelector('#nombre')
let apellido = document.querySelector('#apellido')
let email = document.querySelector('#email')
let pass = document.querySelector('#pass')
let pass2 = document.querySelector('#pass2')
let avatar = document.querySelector('#customFileLang')
let formulario= document.querySelector('#formulario')

let errores = {}
let regExEmail =  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
let regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;
let regExExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
let regExLetras = /^[A-Z]+$/i

nombre.addEventListener('blur', function(){
    switch(true){
        case this.value === "" :
            errores.nombre = "El campo nombre es obligatorio";
            errorNombre.innerHTML = errores.nombre;
            this.classList.add('is-invalid')
            break;
        case this.value <2:
            errores.nombre = "Tenes que poner al menos 2 letras";
            errorNombre.innerHTML = errores.nombre;
            this.classList.add('is-invalid')
            break;
        case !regExLetras.test(this.value):
            errores.nombre = "Solo podes ingresar letras";
            errorNombre.innerHTML = errores.nombre;
            this.classList.add('is-invalid')
            break;
        default:
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
            errorNombre.innerHTML= ""
    }
})
apellido.addEventListener('blur', function(){
    switch(true){
        case this.value === "" :
            errores.nombre = "El campo apellido es obligatorio";
            errorApellido.innerHTML = errores.nombre;
            this.classList.add('is-invalid')
            break;
        case this.value <2:
            errores.nombre = "Tenes que poner al menos 2 letras";
            errorApellido.innerHTML = errores.nombre;
            this.classList.add('is-invalid')
            break;
        case !regExLetras.test(this.value):
            errores.nombre = "Solo podes ingresar letras";
            errorApellido.innerHTML = errores.nombre;
            this.classList.add('is-invalid')
            break;
        default:
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
            errorApellido.innerHTML= ""
    }
})
email.addEventListener('blur', function(){
    switch(true){
        case this.value === "" :
            errores.nombre = "El campo email es obligatorio";
            errorEmail.innerHTML = errores.nombre;
            this.classList.add('is-invalid')
            break;
        case !regExEmail.test(this.value):
             errores.nombre = "El email no es valido";
             errorEmail.innerHTML = errores.nombre;
             this.classList.add('is-invalid')
             break; 
        default:
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
            errorEmail.innerHTML= "" 
    }
})
pass.addEventListener('blur', function(){
    switch(true){
        case this.value === "" :
            errores.nombre = "El campo contraseña es obligatorio";
            errorPassword.innerHTML = errores.nombre;
            this.classList.add('is-invalid')
            break; 
        case !regExPass.test(this.value):
            errores.nombre = "La contraseña debe tener entre 6 y 12 caracteres, una mayúscula una minúscula y un número";
            errorPassword.innerHTML = errores.nombre;
            this.classList.add('is-invalid')
            break; 
        default:
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
            errorPassword.innerHTML= ""

    }
})
pass2.addEventListener('blur', function(){
   switch(true){
       case this.value === "":
           errores.nombre = " El campo repetir contraseña es obligatoria";
           errorPassword2.innerHTML = errores.nombre;
           this.classList.add('is-invalid')
           break;
        case this.value !== pass.value:
            errores.nombre = " Los campos no coinciden";
            errorPassword2.innerHTML = errores.nombre;
            this.classList.add('is-invalid')
            break;  
        default:
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
            errorPassword2.innerHTML= ""
    
   }
})
avatar.addEventListener('change', function(e){
    switch(true){
        case !regExExtensions.exec(this.value):
            errores.nombre = " Solo imagenes con extension jpg, jpeg, png o gif";
            errorAvatar.innerHTML = errores.nombre;
            this.classList.add('is-invalid')
            this.value= ''
            vistaPrevia.src=""
            break;    
        default:
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
            errorAvatar.innerHTML=''
            let reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]) 

            reader.onload=function(){
                vistaPrevia.src= reader.result
            }
            
            break;

    }
})
formulario.addEventListener('submit', function(e){
    e.preventDefault();
    let error = false;
    let elementosForm = this.elements;
    for(let i = 0 ; i<elementosForm.length-3; i++){

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