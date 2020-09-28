const fetch = require("node-fetch");
const bbdd = require("./bbdd");

exports.gethome = async (req, res) => {
  let favoritas = await bbdd.getFilmsDetail();

  res.render("home.pug", {
    hache1: "Pelis favos",
    favorites: favoritas,
  });
};

exports.saveFilm = (req, res) => {
  var peli = req.body;

  //guardar en BBDD
  bbdd.createMovie(peli);
  res.status(200).redirect("/");
  // res.render("home");
  // res.send(req.body);
};

exports.deleteFilm = (req, res) => {
  var peli = req.body.title;
  bbdd
    .deleteMovie(peli)
    .then((datos) => {
      res.send();
    })
    .catch((e) => console.log(e));
};

// quiero decirle en el pug que if no id que me muestre el botón guardar
exports.getDetail = (req, res) => {
  var peli = req.params.titulo;
  bbdd
    .getMovie(peli)
    .then((datos) => {
      console.log("vamos a renderizarXXXXXXXXXXXXXXXXXXXXX");
      console.log(datos);

      res.render("movie.pug", {
        hache1: "Pelis favos",
        Title: datos[0].Title,
        Year: datos[0].Year,
        Director: datos[0].Director,
        Actors: datos[0].Actors,
        Genre: datos[0].Genre,
        Awards: datos[0].Awards,
        Runtime: datos[0].Runtime,
        Poster: datos[0].Poster,
        id: datos[0]._id,
      });
    })
    .catch((e) => console.log(e));
};

exports.edit = (req, res) => {
  var peli = req.params.titulo;
  bbdd
    .getMovie(peli)
    .then((datos) => {
      res.render("formulario", {
        rutaPost: "/edit",
        hache1: "Pelis favos",
        id: datos[0]._id,
        Title: datos[0].Title,
        Year: datos[0].Year,
        Director: datos[0].Director,
        Actors: datos[0].Actors,
        Genre: datos[0].Genre,
        Awards: datos[0].Awards,
        Runtime: datos[0].Runtime,
        Poster: datos[0].Poster,
      });
    })
    .catch((e) => console.log(e));
};

exports.postUpdate = (req, res) => {
  var id = req.body.id;
  console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$4");
  console.log(id);
  console.log(req.body);

  bbdd
    .setMovie(id, req.body)
    .then((datos) => {
      res.status(200).redirect("/");
    })
    .catch((e) => console.log(e));
};

exports.getfilms = (req, res) => {
  let titulo = req.params.titulo;
  fetch(`http://www.omdbapi.com/?apikey=fbc7a715&t=${titulo}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      res.render("movie.pug", {
        hache1: "Pelis favos",
        Title: data.Title,
        Year: data.Year,
        Director: data.Director,
        Poster: data.Poster,
        Actors: data.Actors,
        Genre: data.Genre,
        Awards: data.Awards,
        Runtime: data.Runtime,
      });

      res.end();
    });
};
exports.formulario = (req, res) => {
  res.render("formulario", { rutaPost: "/submit-form" });
};

// exports.postFormulario = ()

exports.geterror = (req, res) => {
  res.render("error", {
    mensaje: "Shhh! Unicornio durmiendo...",
    mensaje2: 404,
  });
};
