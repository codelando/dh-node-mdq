## Uso de GIT y Github


### Cuando terminamos de instalar

`git `

`git --version`


### Solo una vez por repositorio

Opcion 1: creando el repositorio primero en la compu.

`git init`

`git config user.name "nombreDeUsuario"`
`git config user.name --global "nombreDeUsuario"`

`git config user.name`

`git config user.email "email@usuadio.de"`
`git config user.email --global "email@usuadio.de"`

`git config user.email`

`git remote add origin http://dire-del-repo`

`git remote -v`

Opcion 2: creando el repositorio primero en Github.

`creacion del repo en github`

`git clone http://dire-del-repo`

### Cada vez que subamos cambios

Agregamos todos los archivos modificados

`git add .`

O bien agregamos algunos archivos específicos.

`git add archivos`

`git commit -m "Mensaje"`

`git push origin master`
    - origin es el destino
    - master es la rama

`git status`

`git log -> historial de cambios`

### Para bajar cambios

`git pull origin master`

`git clone http://dire-del-repo`

### Tips del perfil

- Como crear un repo de perfil
- Github pages