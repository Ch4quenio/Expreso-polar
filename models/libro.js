module.exports = (sequelize, DataTypes) => {
    const Libro = sequelize.define('libro', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titulo: DataTypes.STRING(200),
        precio: DataTypes.INTEGER,
        portada: DataTypes.STRING(150)
    },
    {
        freezeTableName: true,  // Hace que no cambie el nombre de la tabla, a veces cambia de la nada UwU,
        timestamps: false
    });

    Libro.associate = (models) => {
        Libro.belongsTo(models.autor); // conecta esta tabla con la tabla de autor. Belongs To significa Pertenece A. O sea que esta tabla Pertenece
        // a autor
    };

    return Libro;
}
