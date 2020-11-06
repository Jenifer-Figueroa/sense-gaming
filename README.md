# Grupo2-SenseGaming
ProyectoIntegrador

## Primer Sprint

## Integrantes

### Rusin, Nazarena Florencia
- 23 años
- Estudiante de programacion

### Figueroa, Jenifer
- 26 años
- Estudiante de programacion

## Descripcion del sitio

SenseGaming es un marketplace digital especializado en productos gaming donde encontraran notebooks, perifericos, opciones de PC armadas, todo tipo de accesorios para su pc y hardware de primeras marcas para las diversas necesidades de los clientes.


## Publico objetivo

El publico al cual apuntamos es al cliente con cierto conocimiento de hardware que tengan exigentes demandas sobre la calidad de los productos y sobre todo tengan curiosidad por lo ultimo en cuanto a tecnologia. 


## Sitios de referencia 

- [Compra Gamer](https://www.compragamer.com/)
- [Xellers](https://www.xellers.com.ar/)
- [Gezatek Computacion](https://www.gezatek.com.ar/)
- [Mexx](https://www.mexx.com.ar/)
- [FullH4rd](https://www.fullh4rd.com.ar/)

## Segundo Sprint

### [Tablero de Trabajo](https://trello.com/b/QYNIbZ0X/grupo-2-sensegaming)

### Retrospectiva: [retro.md](https://github.com/HernanMorales94/Grupo_2_SenseGaming/blob/master/retro.md)




# Tercer Sprint


## Listado de Rutas

- Home('/')
- Listado de productos ('/products')
- Detalle del producto ('/products/detalle/:id')
- Formulario de carga y edición de productos ('/products/add') , ('/products/edit') & ('products/show/:id')
- Formulario de registro y login ('users/register') & ('users/login')

## Funcionalidad de las rutas

- /products ➡️ (GET) muestra una lista de todos los productos. Se puede acceder desde el header.

- /products/detalle/:id ➡️ (GET) mustra el detalle del producto. Se puede acceder clicleando en el productos en "VER".

- /products/add ➡️ (GET) muestra el formulario para la creacion del producto. Se puede acceder desde el usuario de ADMINISTRADOR en el boton "ADMINISTRADOR".

- /products/add ➡️ (POST) es el metodo que guarda los datos cargados en el formulario.

- /products/edit ➡️ (GET) muestra la lista de todos nuestros productos donde podemos ver detalle, editar y eliminar. se puede acceder el boton "MIS PRODUCTOS" que se encuentra en el header en el boton "ADMINISTRADOR" si sos administrador.

- /products/show/:id ➡️ (GET) muestra la vista donde podemos editar nuetros producto. Se puede acceder en el boton de ditar que esta en el producto.

- /products/show/:id ➡️ (PUT) es el metodo que actualiza los datos. 

- /products/delete/:id ➡️ (DELETE) es el metodo que se ocupa de eliminar el producto. Se encuentra junto al boton de editar

# Cuarto Spring

## 👤 Registro de usuarios

- Registro: se puede acceder desde ('/users/registro') o desde el header. Permite al usuario registrarse completando todos los datos, si se registro con exito lo redirecciona al Login, si hay algun error muestra los errores en los campos del formulario.

- Login de usuarios: se puede acceder desde ('/users/login') o desde el header. se verifica los campos enviados por el usuario, si es incorrectos marca los erroresen el campo del formulario, en el caso de que sea correcto, se redirigue al home. Si el usuario tiene privilegios de administrador en el header aparece el boton ADMINISTRADOR.


## Rutas de huéspedes y de usuarios

Los huespedes y los usuarios logueados pueden acceder al home, registro/login y a los productos

Los usuarios logueados como administrador pueden acceder a todo lo anterior mas al menu de administrador.

Usuario Admin: jenifer@gmail.com
Password :      123456

# Quinto Sprint

## Implementacion de la Base de Datos

- Creacion de la carpeta Sequelize con todas sus dependencias.
- Script (se encuentran en la carpeta data):
    - Script de estructura de tabla [sensegaming.sql](https://github.com/rusinnazarena/Grupo_2_SenseGaming/blob/master/site/data/sensegaming.sql)
    - Script de estructura y poblacion de datos [estructura y data.sql](https://github.com/rusinnazarena/Grupo_2_SenseGaming/blob/master/site/data/estructura%20y%20data.sql)
- Diagrama de la estructura [estructura.png](https://github.com/rusinnazarena/Grupo_2_SenseGaming/blob/master/site/data/estructura.png)
- Se crearon los modelos de la base de datos.
- CRUD:
    - De productos
    - De usuarios

- Usuario Administrador:
    - Usuario: jenifer@gmail.com
    - Password: 123456
