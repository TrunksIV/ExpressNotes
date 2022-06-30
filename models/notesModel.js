module.exports = (sequelize, DataTypes) => {
    const notes = sequelize.define('notes', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        completed: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            default: true,
        }
    })
    return notes
}

