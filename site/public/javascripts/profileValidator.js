window.addEventListener('load', function(){
    

    let formulario = document.querySelector('.form')
    let inputDireccion = document.querySelector('.direccion')
    let inputLocalidad = document.querySelector('.localidad')
    let inputProvincia = document.querySelector('.provincia')
    let inputAvatar = document.querySelector('#inputGroupFile01')
    let eliminar = document.querySelector('#delete')
    
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
                
                for(let i = 0 ; i<elementosForm.length-3; i++){
            
                    if (elementosForm[i].value == "" &&  i!=0 && i!=4 && i!=5 && i!=6){
                        elementosForm[i].classList.add('is-invalid');
                        msgError.innerHTML = "Los campos son obligatorios"
                        error = true
                    }
                    
                }
                if(!error){
                    formulario.submit()
                }
            });



            inputAvatar.addEventListener('change',function(e){

                //console.log(!e.target.files[0].name.match(/\.(jpg|jpeg|png|gif)$/))
        
                if (!e.target.files[0].name.match(/\.(jpg|jpeg|png|gif)$/)){
                    errorAvatar.innerHTML = 'Extension invalida';
                    this.classList.add('is-invalid')

                    
                }else{
        
                    let reader = new FileReader();
        
                    reader.readAsDataURL(e.target.files[0]);
        
                    reader.onload = function(){
                        
                            vistaPrevia.src = reader.result;
                            inputAvatar.classList.remove('is-invalid')
                            inputAvatar.classList.add('is-valid');
                            errorAvatar.innerHTML = ""
        
                    }  
                }    
            });

            eliminar.addEventListener('click', function(e){
                e.preventDefault()
                Swal.fire({
                        title: '¿Vas eliminar este usuario?',
                        icon: '¡advertencia!',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Si!'
                    })
                    .then((result)=>{
                        if (result.isConfirmed) {
                            Swal.fire(
                                '¡Eliminado!',
                                'Tu usuario fue eliminado.',
                                'success'
                            )
                            .then(() => {
                            eliminar.submit()
                        })
                        }
                    })
                })


    })
    
    
    