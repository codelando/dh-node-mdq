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
    });

    Category.associate = models => {
        Category.hasMany(models.Product, {
            as: 'products',
            foreignKey: 'category_id'
        })
    }
    
    return Category;
}
