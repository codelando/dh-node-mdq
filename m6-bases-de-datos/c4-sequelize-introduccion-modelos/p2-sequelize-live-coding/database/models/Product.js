module.exports = (sequelize, DataTypes) => {
    const alias = 'Product'
    const columns = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.STRING,
        },
        image: {
            type: DataTypes.STRING,
        },
        offer: {
            type: DataTypes.BOOLEAN
        },
        order: {
            type: DataTypes.INTEGER,
        },
    }
    const config = {
        timestamps: false,
        tableName: 'products'
    }
   
    const Product = sequelize.define(alias, columns, config);
    return Product;
}