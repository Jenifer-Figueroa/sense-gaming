


window.addEventListener('load', function(){
    let search = document.querySelector('#search')
    let boton = document.querySelector('#boton')
    let formulario = document.querySelector('#busca')
    let disabled = document.querySelector('.disabled')

    formulario.addEventListener('submit', function(e){
        
        if(search.value == ""){
            e.preventDefault();
        }else{
            formulario.submit()
        }
    })
    
    
})