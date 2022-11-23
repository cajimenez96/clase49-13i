const express = require('express');
const app = express();
const port = 3000;

//RUTAS

//GET
app.get('/obtener-informacion', (req, res) => {
  //req -> Informacion que viene del front
  //res -> Respuesta que va a brindar el back

  res.send('Obteniendo informacion');
});

//POST
app.post('/enviar-informacion', (req, res) => {
  res.send('Estas enviando informacion');
});

//PATCH
app.patch('/modificar-informacion', (req, res) => {
  res.send({message: "Acabás de modificar la informacion"});
});

//DELETE
app.delete('/eliminar-informacion', (req, res) => {
  res.send('Se ha eliminado la informacion');
});

//ERROR
app.patch('/error', (req, res) => {
  res.status(404).send('No pudo conectar al servidor, intente mas tarde.');
});

app.listen(port, () => {
  console.log(`Estamos en el servidor http://localhost:${port}`);
});
