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
        genre: {
            type: dataTypes.ENUM('masculino', 'femenino', 'otros')
        }
    }, {
        tableName: 'users',
        timestamps: false,
    });
    
    return User;
}
