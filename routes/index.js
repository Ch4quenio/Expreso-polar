var express = require('express');
var router = express.Router();

// Traemos todas las funciones de DB en "api"
const api = require('../api');

/* GET home page. */
router.get('/', async (req, res) => {
  const books = await api.getBooks();
  console.log(books);

  // Devuelve un JSON con la información
  // res.send(books);
  res.render('index', {
    title: 'Librería',
    books
  });
});

router.get('/libro/:id', async (req, res) => {
  // Los datos de la URL vienen en req.params
  const book = await api.getBookById(req.params.id);
  res.render('pages/libro', { book });
});

// Crear la ruta /autores
router.get('/autores', async (req, res) => {
  // Cuando ingreso ahí muestro listado de autores
  const authors = await api.getAuthors();
  console.log(authors);

  res.send(authors);
});

router.get('/nosotros', (req, res) => {
  res.render('pages/nosotros');
});

router.get('/contacto', (req, res) => {
  res.render('pages/contacto');
});

module.exports = router;
