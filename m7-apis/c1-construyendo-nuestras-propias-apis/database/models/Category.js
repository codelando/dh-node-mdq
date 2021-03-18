module.exports = (sequelize, dataTypes) => {
    const Category = sequelize.define('Category', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER(11)
        },
        name: {
            type: dataTypes.STRING(200),
        },
    }, {
        tableName: 'categories',
        timestamps: false,
    });

    Category.associate = model => {
        Category.hasMany(model.Product, {
            as: 'products',
            foreignKey: 'category_id'
        })
    }

    return Category;
}
