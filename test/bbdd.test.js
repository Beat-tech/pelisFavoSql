const { createMovie, getMovie, deleteMovie, setMovie } = require("../bbdd");

describe("Comprueba el comportamiento de createMovie", () => {
  test("Crea peli en base de datos", () => {
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

  test("No crea peli en base de datos si no tiene un campo required", () => {
    let peli = {
      Title: "Titanic",

      Actors: "Leonardo DiCaprio, Kate Winslet, Billy Zane, Kathy Bates",
      Genre: "Drama, Romance",
      Awards: "Won 11 Oscars. Another 113 wins & 83 nominations.",
      Runtime: "194 min",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
    };

    return createMovie(peli).then((respuesta) => expect(respuesta).toBe(null));
  });
});
describe("Comprueba el comportamiento de getMovie", () => {
  test("Lee una película", () => {
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
});

describe("Comprueba el comportamiento de deleteMovie", () => {
  test("Borra una película", () => {
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
});

describe("Comprueba el comportamiento de setMovie", () => {
  test("Edita una película", () => {
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
});
