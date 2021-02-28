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

    Product.associate = models => {
        Product.belongsTo(models.Category, {
            as: 'category',
            foreignKey: 'category_id'
        })
    }

    Product.associate = models => {
        Product.belongsToMany(models.Tag, {
            as: 'tags',
            through: 'product_tag',
            foreignKey: 'product_id',
            otherKey: 'tag_id',
            timestamps: false
        })
    }
    
    return Product;
}
