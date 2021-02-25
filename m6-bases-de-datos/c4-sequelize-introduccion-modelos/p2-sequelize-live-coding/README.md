# Sequalize Instalación y Configuración

## Instalación

1. Instala el cli de sequalize de manera global
````
npm install sequelize-cli -g
```

2. Instalamos sequalize en nuestro proyecto
````
npm install sequelize
```

3. Instalamos el cliente de MySQL para node
````
npm install mysql2
```

## Configuración

1. Crear `.sequelizerc` en la raiz del proyecto con:

```
const path = require('path')

module.exports = {
  config: path.resolve('./database/config', 'config.js'),
  'models-path': path.resolve('./database/models'),
  'seeders-path': path.resolve('./database/seeders'),
  'migrations-path': path.resolve('./database/migrations'),
}
```

2. Correr el commando de inicialización
```
sequelize init
```
 
 ## Creación de modelos

1. Crear archivo en el path `/database/models/` en CamelCase y singular:

```
Producto.js
```

2. Definición del modelo:


```
sequelize.define(modelName, columns, config)
```

https://sequelize.org/v5/manual/data-types.html
```
DataTypes.STRING
DataTypes.INTEGER
Sequelize.STRING
Sequelize.BOOLEAN
Sequelize.FLOAT
--
Sequelize.ENUM('value 1', 'value 2')
```

```
module.exports = (sequelize, dataTypes) => {
    const Product = sequelize.define('Products', {
       id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER(11)
        },
        name: {
            type: dataTypes.STRING(200),
        },
        price: {
            type: dataTypes.DECIMAL,
        },
        image: {
            type: dataTypes.STRING(200),
        },
        offer: {
            type: dataTypes.BOOLEAN,
        }
    }, {
        tableName: 'products',
        paranoid: true,
        timestamps: true
    });
    return Product;
}


```