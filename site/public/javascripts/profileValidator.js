window.addEventListener('load', function(){

    let formulario = document.querySelector('.form')
    let inputDireccion = document.querySelector('.direccion')
    let inputLocalidad = document.querySelector('.localidad')
    let inputProvincia = document.querySelector('.provincia')
    let inputAvatar = document.querySelector('#inputGroupFile01')
    let eliminar = document.querySelector('#delete')
    let selectProvincia = document.getElementById('provinciaSelect')
    let selectCiudad = document.getElementById('localidadSelect')
    
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
                });

    //para ordenar un jason por clave
    function ordenarAsc(p_array_json, p_key) {
    p_array_json.sort(function (a, b) {
       return a[p_key] > b[p_key];
    });
    }
       
    //APIS

    fetch('https://apis.datos.gob.ar/georef/api/provincias')
            .then( response => response.json()) //me retorna la respuesta y lo convierte a json
            .then(result=>{             //uso la respuesta y la ordeno
            
                ordenarAsc(result.provincias, "nombre");

                 result.provincias.forEach(provincia => {   //recorro la respuesta
                 provinciaSelect.innerHTML += `<option value=${provincia.id}>${provincia.nombre}</option>`  //inserto la lista desplegable
                    })
                    
                })
                
        inputProvincia.addEventListener('focus',function(){
                   this.style.display = 'none';     //cuando hago focus el input se oculta y se muestra el select
                   selectProvincia.style.display = 'block'
               }) 
        selectProvincia.addEventListener('change', function(){
                selectProvincia.style.display = 'none';         //cuando hay algun cambio se ocualta el selct y se muestra el input con el resultado
                inputProvincia.style.display = 'block';

                inputProvincia.value = selectProvincia.options[selectProvincia.selectedIndex].text      //se guarda el resultado que seleccione

                selectCiudad.innerHTML = '';

            fetch('https://apis.datos.gob.ar/georef/api/localidades?max=1000&provincia=' + inputProvincia.value)
            .then(response => response.json())
            .then (result =>{
                ordenarAsc(result.localidades,'nombre')

                result.localidades.forEach(localidad=>{
                    selectCiudad.innerHTML += `<option value=${localidad.id}>${localidad.nombre}</option>`
                })

                selectCiudad.style.display = 'block';
                inputLocalidad.style.display = 'none'
            })
        })

        selectCiudad.addEventListener('change', function(){
            selectCiudad.style.display = 'none'
            inputLocalidad.style.display = 'block'

            inputLocalidad.value = selectCiudad.options[selectCiudad.selectedIndex].text
        })
    






      formulario.addEventListener('submit', function(e){
            e.preventDefault();
            let error = false;
            let elementosForm = this.elements;
            console.log(elementosForm)
            
            for(let i = 0 ; i<elementosForm.length-3; i++){
        
                if (elementosForm[i].value == "" &&  i!=0 && i!=4 && i!=5 && i!=7){
                    elementosForm[i].classList.add('is-invalid');
                    msgError.innerHTML = "Los campos son obligatorios"
                    error = true
                }
                
            }
            if(!error){
                formulario.submit()
            }
        });
    
})