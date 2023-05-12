module.exports = (sequelize, DataTypes) => {
    const drama = sequelize.define('Drama', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        slug: {
            type: DataTypes.STRING,
            allowNull: false
        },
        category: {
            type: DataTypes.STRING,
            allowNull: true
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        releaseDate: {
            field: 'release_date',
            type: DataTypes.DATE,
            allowNull: true
        },
        trailer: {
            type: DataTypes.STRING,
            allowNull: true
        },
        episodes: {
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
        tableName: 'drama',
        timestamps: true
    })
    return drama
}