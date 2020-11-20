window.addEventListener('load', function(){
    
    
    let inputEmail = document.querySelector('#exampleInputEmail1')
    let inputPassword= document.querySelector('#exampleInputPassword1')

    let errores = {}

    let regExEmail =  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
    let regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;

    inputEmail.addEventListener('blur', function(){
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
    inputPassword.addEventListener('blur', function(){
        switch(true){
            case this.value === "" :
                errores.nombre = "El campo contraseña es obligatorio";
                errorPassword.innerHTML = errores.nombre;
                this.classList.add('is-invalid')
                break; 
            case !regExPass.test(this.value):
                errores.nombre = "La contraseña debe tener entre 6 y 12 caracteres";
                errorPassword.innerHTML = errores.nombre;
                this.classList.add('is-invalid')
                break; 
            default:
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                errorPassword.innerHTML= ""
    
        }
    })
})