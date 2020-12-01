window.addEventListener('load', function(){
    
    
    let inputEmail = document.querySelector('.email')
    let inputPassword= document.querySelector('.password')

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
             errores.nombre = "Ingrese un email válido";
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
                errores.nombre = "Escribe tu contraseña";
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