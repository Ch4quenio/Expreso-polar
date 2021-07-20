
module.exports = (sequelize, DataTypes) => {// Llamamos a sequelize, para trabajar con base de datos y con DataTypes definimos cada dato.
    const Autor = sequelize.define('autor', { // En el parentesis se pone el nombre oficial de la tabla, todo miniscula distinto al nombre de la variable.
        id: {  // Definimos las caracteristicas del campo
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombreCompleto: DataTypes.STRING(100) // En el parentesis ponemos la cantidad de caracteres
    },
    {
        freezeTableName: true,  // Hace que no cambie el nombre de la tabla, a veces cambia de la nada UwU,
        timestamps: false
    });

    Autor.associate = (models) => {
        Autor.hasMany(models.libro); // Conecta la tabla de autores con la de libros
    };

    return Autor;// Esta linea de codigo hace que al final se pueda exportar autor
}
