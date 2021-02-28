module.exports = (sequelize, dataTypes) => {
    const User = sequelize.define('User', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        user: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING,
        },
    }, {
        tableName: 'users',
        timestamps: false,
    });
    
    return User;
}
