const { createMovie, getMovie, deleteMovie, setMovie } = require("../bbdd");

//Comprueba la función createMovie de bbdd.js que se ejecuta de manera asíncrona en films.js
test("Comprobar que crea peli en base de datos", () => {
  let peli = {
    Title: "Titanic",
    Director: "James Cameron",
    Year: 1997,
    Actors: "Leonardo DiCaprio, Kate Winslet, Billy Zane, Kathy Bates",
    Genre: "Drama, Romance",
    Awards: "Won 11 Oscars. Another 113 wins & 83 nominations.",
    Runtime: "194 min",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
  };

  return createMovie(peli).then((respuesta) =>
    expect(respuesta).not.toBe(null)
  );
});

//Comprueba que lee una película de la bbdd
test("Comprobar que lee una película", () => {
  let peli = {
    Title: "Titanic",
    Director: "James Cameron",
    Year: 1997,
    Actors: "Leonardo DiCaprio, Kate Winslet, Billy Zane, Kathy Bates",
    Genre: "Drama, Romance",
    Awards: "Won 11 Oscars. Another 113 wins & 83 nominations.",
    Runtime: "194 min",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
  };

  return getMovie(peli).then((respuesta) => expect(respuesta).not.toBe(null));
});

//Comprobar que borra una película
test("Comprobar que borra una película", () => {
  let peli = {
    Title: "Titanic",
    Director: "James Cameron",
    Year: 1997,
    Actors: "Leonardo DiCaprio, Kate Winslet, Billy Zane, Kathy Bates",
    Genre: "Drama, Romance",
    Awards: "Won 11 Oscars. Another 113 wins & 83 nominations.",
    Runtime: "194 min",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
  };

  return deleteMovie(peli).then((respuesta) =>
    expect(respuesta).not.toBe(null)
  );
});

//Comprobar que edita una película

test("Comprobar que edita una película", () => {
  let peli = {
    Title: "Titanic",
    Director: "James Cameron",
    Year: 1997,
    Actors: "Leonardo DiCaprio, Kate Winslet, Billy Zane, Kathy Bates",
    Genre: "Drama, Romance",
    Awards: "Won 11 Oscars. Another 113 wins & 83 nominations.",
    Runtime: "194 min",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
  };
  let id = 2;

  return setMovie(peli, id).then((respuesta) => expect(respuesta).not.toBe());
});
