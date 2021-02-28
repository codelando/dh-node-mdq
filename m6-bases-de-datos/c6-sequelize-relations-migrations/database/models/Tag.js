module.exports = (sequelize, dataTypes) => {
    const Tag = sequelize.define('Tag', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER(11)
        },
        name: {
            type: dataTypes.STRING(200),
        },
    }, {
        tableName: 'tags',
        timestamps: false
    });

    Tag.associate = models => {
        Tag.belongsToMany(models.Product, {
            as: 'products',
            through: 'product_tag',
            foreignKey: 'tag_id',
            otherKey: 'product_id',
            timestamps: false
        })
    }
    
    return Tag;
}
