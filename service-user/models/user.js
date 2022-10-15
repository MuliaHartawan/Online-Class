module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id : {
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true,
            allowNull : false
        },
        name : {
            type : DataTypes.STRING,
            allowNull : false
        },
        profession : {
            type : DataTypes.STRING,
            allowNull : false
        },
        avatar : {
            type : DataTypes.STRING,
            allowNull : false
        },
        role : {
            type : DataTypes.ENUM,
            values: ['admin', 'student'],
            allowNull : false,
            defaultValue : 'student'
        },
        email : {
            type : DataTypes.STRING,
            allowNull : false,
            unique : true
        },
        password : {
            type : DataTypes.STRING,
            allowNull : false
        },
        createdAt : {
            field : 'created_at',
            type : DataTypes.DATE,
            allowNull : false
        },
        updatedAt : {
            field : 'updated_at',
            type : DataTypes.DATE,
            allowNull : false
        }
    }, {
        tableName : 'users',
        timestamps : true
    });

    return User;
}