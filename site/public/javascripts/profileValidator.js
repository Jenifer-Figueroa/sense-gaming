window.addEventListener('load', function(){
    

let formulario = document.querySelector('.form')
 
let inputDireccion = document.querySelector('.direccion')
let inputLocalidad = document.querySelector('.localidad')
let inputProvincia = document.querySelector('.provincia')


let errores={}

inputDireccion.addEventListener('blur', function(){

    switch(true){
        
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

        formulario.addEventListener('submit', function(e){
            e.preventDefault();
            let error = false;
            let elementosForm = this.elements;

            console.log(this.elements)

            for(let i = 0 ; i<elementosForm.length-2; i++){
        
                if (elementosForm[i].value == "" &&  i !=0 && i !=1 && i !=2 && i !=3){
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