


window.addEventListener('load', function(){
    let search = document.querySelector('#search')
    let boton = document.querySelector('#boton')
    let formulario = document.querySelector('#formulario')
    let disabled = document.querySelector('.disabled')

    formulario.addEventListener('submit', function(e){
        
        if(search.value == ""){
            e.preventDefault();
        }else{
            formulario.submit()
        }
    })
    disabled.addEventListener('click', function(e){
        e.preventDefault()
    })
    
})