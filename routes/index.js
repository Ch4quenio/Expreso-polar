var express = require('express');
var router = express.Router();
const api = require("../api");
/* GET home page. */
router.get('/', async (req, res) => {
  const books = await api.getBooks();
  console.log(books)
  res.render('index', { title: 'Ositos polares', books });
  // res.send(books)
});

router.get('/libro/:id', async (req, res) => {
  // Los datos de la URL vienen en req.params
  const book = await api.getBookById(req.params.id);
  res.render('pages/libro', { book });
});

router.get('/buscar', async (req, res) => {
  // Los datos de la URL vienen en req.query
  const books = await api.findBookByTitle(req.query.query);
  res.render('index', {
    title: 'Resultado de búsqueda',
    books
  });
  // res.send(book);
});
router.get('/contacto',(req,res) => {
res.render("pages/contacto");
})
router.get('/agregar',async (req,res) => {
  const autores = await api.getAuthors();
res.render("pages/agregar",{autores});

res.send(book)
})
router.post("/agregar_proceso",async (req,res) => {
  const {titulo,precio,autor,portada} = req.body;
api.addBook(titulo,precio,autor,portada)
const books = await api.getBooks();
res.render("index",{
  title: "Libreria",
  books
})
})
router.get('/nosotros',(req,res) => {
res.render("pages/nosotros");
})
router.get('/autores', async (req, res) => {
  const authors = await api.getAuthors();
  console.log(authors)
  // res.render('index', { title: 'Ositos polares' });
  res.send(authors)
});
router.get("/prueba",async (req,res)=>{
  const autores = await api.getAuthors();

  res.render("pages/probando",{autores})
})

router.get("/eliminar/:id", async(req,res)=>{
  const book = await api.deleteBook(req.params.id)
  if(book > 0){ // redirecciona
    // const books = await api.getBooks();
    res.redirect("/");
  }
  else{
    res.send("Algo salio mal pequeño pajabrava!")
  }

})
module.exports = router;
