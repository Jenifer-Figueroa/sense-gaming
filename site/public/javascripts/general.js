


window.addEventListener('load', function(){
    let search = document.querySelector('#search')
    let boton = document.querySelector('#boton')
    let formulario = document.querySelector('#formulario')

    formulario.addEventListener('submit', function(e){
        e.preventDefault();
        if(search.value == ""){
            alert('Ingresa tu busqueda')
        }else{
            formulario.submit()
        }
    })
    
})