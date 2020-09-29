const mariadb = require("mariadb");

//Datos para la conexión

const pool = mariadb.createPool({
  host: "localhost",
  user: "root",
  password: "",
  connectionLimit: 5,
  database: "movies",
});

//Conectar
//Son async todas porque tienen que esperar una respuesta
//Esto son métodos, el módulo es el archivo
const connect = () => {
  return pool;
};

//Crear Usuario
exports.createMovie = async (peli) => {
  try {
    conn = await pool.getConnection();
    var res = await conn.query(
      `INSERT
       INTO   favorites 
              (Title, Year, Director, Actors, Awards, Genre, Runtime, Poster) 
       VALUES 
              ("${peli.Title}","${peli.Year}","${peli.Director}","${peli.Actors}","${peli.Awards}","${peli.Genre}","${peli.Runtime}","${peli.Poster}")`
    );
    console.log(res);
    return res;
  } catch (err) {
    console.log(err);
    return null;
  } finally {
    if (conn) conn.release(); //libera el pool
  }
};

exports.getFilmsDetail = async () => {
  try {
    conn = await pool.getConnection();
    const res = await conn.query(
      `SELECT * 
       FROM favorites`
    );
    delete res.meta;

    return res;
  } catch (err) {
    console.log(err);
    return null;
  } finally {
    if (conn) conn.release(); //libera el pool
  }
};

//Leer Usuario
exports.getMovie = async (nombre) => {
  try {
    conn = await pool.getConnection();
    const res = await conn.query(
      `SELECT * 
      FROM favorites 
      WHERE Title=(?);`,
      [nombre]
    );
    delete res.meta;
    return res;
  } catch (err) {
    console.log(err);
    return null;
  } finally {
    if (conn) conn.release(); //libera el pool
  }
};

// //Modificar Usuario
exports.setMovie = async (id, film) => {
  try {
    conn = await pool.getConnection();
    const res = await conn.query(
      `UPDATE favorites
       SET    Title=(?), Director=(?), Year =(?), Actors=(?), Genre=(?), Awards=(?), Runtime=(?), Poster=(?)
       WHERE _id=(?);`,
      [
        film.Title,
        film.Director,
        film.Year,
        film.Actors,
        film.Genre,
        film.Awards,
        film.Runtime,
        film.Poster,
        id,
      ]
    );
    delete res.meta;
    console.log(res);
    return res;
  } catch (err) {
    console.log(err);
    return null;
  } finally {
    if (conn) conn.release(); //libera el pool
  }
};
// //Borrar Usuario
exports.deleteMovie = async (nombre) => {
  try {
    conn = await pool.getConnection();
    const res = await conn.query(
      `DELETE
      FROM favorites 
      WHERE Title=(?);`,
      [nombre]
    );
    delete res.meta;
    console.log(res);
    return res;
  } catch (err) {
    console.log(err);
    return null;
  } finally {
    if (conn) conn.release(); //libera el pool
  }
};
