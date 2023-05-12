module.exports = (sequelize, DataTypes) => {
    const cast = sequelize.define('Cast', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        movie_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        drama_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        people_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        createdAt: {
            field: 'created_at',
            type: DataTypes.DATE,
            allowNull: false
        },
        updatedAt: {
            field: 'updated_at',
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
        tableName: 'cast',
        timestamps: true
    })
    return cast
}