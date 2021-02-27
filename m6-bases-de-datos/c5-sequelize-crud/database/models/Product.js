module.exports = (sequelize, dataTypes) => {
    const Product = sequelize.define('Product', {
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
        },
        order: {
            type: dataTypes.INTEGER
        }
    }, {
        tableName: 'products',
        paranoid: true
    });
    
    return Product;
}
