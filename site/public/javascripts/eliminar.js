window.addEventListener('load', function () {
    

    let eliminar = document.querySelectorAll('#delete');
    
    for (let i = 0; i < eliminar.length; i++) {
        eliminar[i].addEventListener('click', function(e) {
            e.preventDefault()
            Swal.fire({
                title: '¿Vas eliminar este producto?',
                icon: '¡advertencia!',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si!'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        '¡Eliminado!',
                        'Tu producto fue eliminado.',
                        'success'
                    )
                    .then(() => {
                    eliminar[i].submit()
                })
                }
            })
                
        })
    }

})