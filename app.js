const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Santiago Fernandez");
});

app.listen(port, () => {
  console.log(`App ejemplo en http://localhost:${port}`);
});

app.get("/test", (req, res) => {
  res.send({ msj: "Mensaje para el usuario", cantMsj: 2 });
});

//alumno ingresando como parámetro con el signo ":"
//http://localhost:3000/numen/Marcos
app.get("/numen/:alumno", (req, res) => {
  let alumno = req.params.alumno;
  res.json(alumno);
});

app.get("/suma/:num1/:num2", (req, res) => {
  let num1 = Number(req.params.num1);
  let num2 = Number(req.params.num2);
  let resultado = num1 + num2;
  if (num1 || num2 <= 0) {
    res.status(400).json("No se pueden introducir números negativos o iguales a cero");
  } else {
    res.status(200).json({ msg: resultado });
  }
  /*console.log(req.params, resultado);
  console.log(num1, num2);
  console.log(typeof num1); //sacándole la conversión Number();*/
});

app.get("/resta/:num1/:num2", (req, res) => {
    let num1 = Number(req.params.num1);
    let num2 = Number(req.params.num2);
    let resultado = num1 - num2;
    if (num1 || num2 <= 0) {
      res.status(400).json("No se pueden introducir números negativos o iguales a cero");
    } else {
      res.status(200).json({ msg: resultado });
    }

app.get("/prueba", (req, res) => {
  //http://localhost:3000/prueba?nombre=juan
  //http://localhost:3000/prueba?nombre=juan&apellido=rodriguez
  //http://localhost:3000/prueba?nombre=juan&apellido=rodriguez&edad=28
  let nombre = req.query.nombre;
  let apellido = req.query.apellido;

  console.log(req.query);
  res.status(200).send(`mi nombre es ${nombre}`);
});

app.get("/numen/:alumno/:clase", (req, res) => {
  //http://localhost:3000/numen/romina/fullstack?comision=1021&dia=viernes
  let alumno = req.params.alumno;
  console.log(req.params, req.query);
  // res.json(alumno);
  // res.json(req.params);
  res.json(req.query);
});
