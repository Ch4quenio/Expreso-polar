// Traemos los modelos
const db = require('../models');

const getBooks = async () => {
    // { include: db.autor } para traer los datos del autor
    const books = await db.libro.findAll({ include: db.autor })
        .then(result => {
            return result;
        });

    return books;
}

const getAuthors = async () => {
    const authors = await db.autor.findAll()
        .then(result => {
            return result;
        });

    return authors;
}

const getBookById = async (id) => {
    // SELECT * FROM libro WHERE id = id
    // findByPk: find by primary key
    const book = await db.libro.findByPk(id, {
        include: db.autor
    }).then(result => {
            return result
        });

    return book;
}

module.exports = {
    getBooks,
    getBookById,
    getAuthors
}
