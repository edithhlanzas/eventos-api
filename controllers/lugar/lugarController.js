import {
    listarTodoslugarQuery,
 
  } from "../../db/lugar/lugarQueries.js";
  
  /**
   * Obtener todos los categoria de la base de datos
   */
  const listarTodoslugar = async (req, res) => {
    // Un bloque try-catch  sirve para validar si la peticion se obtiene o se devuelve un error
    // Try -> intentar
    // Catch -> capturar el error
    try {
      //  Ejecutar la consulta en la base de datos
      const lugar = await listarTodoslugarQuery();
      res.json(lugar);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  export {
    listarTodoslugar,
  
  };
  