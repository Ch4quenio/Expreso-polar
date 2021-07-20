//Traemos las tablas
const { Op } = require("sequelize")
const db = require("../models"); // require incluye al archivo especificado entre parentesis

const getBooks = async () => {
  const books = await db.libro.findAll() // await hace que esta linea de codigo termine de ejecutarse antes de seguir leyendo hacia abajo
  .then(result => {
    return result ;
  })

  return books
}

const getBookById = async (id) =>{
const book = await db.libro.findByPk(id,{ // findByPk lo que hace es buscar segun la Primary Key, que seria lo mismo que el ID
  include: db.autor
})
.then(result =>{
  return result
})
return book;
}

const getAuthors = async () => {
  const authors = await db.autor.findAll({include: db.libro}) // await hace que esta linea de codigo termine de ejecutarse antes de seguir leyendo hacia abajo
  .then(result => {
    return result ;
  })

  return authors
}


const findBookByTitle = async (query) => {
    // [Op.substring] es igual a LIKE = '%dato%'
    const books = await db.libro.findAll({
        where: {
            titulo: {
                [Op.substring]: query
            }
        },
        include: db.autor
    }).then(result => {
        return result;
    });
    return books;
}

const addBook = async(titulo,precio,autorId,portada) =>{
const book = await db.libro.create({ // En el create respetamos el orden y los nombres de las columnas
  titulo,precio,portada,autorId
});

return book;
}

const deleteBook = async (id) =>{

const authors = await db.libro.destroy({
  where: {
    id:id // Esta funcion borra el libro segun el ID que se le de. Si se le da el ID 2 borra el libro con ese ID.
  }
})


return authors

}

module.exports  = {
  getBooks,
getAuthors,
getBookById,
findBookByTitle,
addBook,
deleteBook
}
