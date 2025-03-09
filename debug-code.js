// -------------------------------
// ETAPA 3: Debugging
// -------------------------------

/*
Código original con errores:

app.get('/tasks/:id', (req, res) ⇒ {
  const { id } = req.body; // Error: se esperaba obtener el id desde req.params
  const task = tasks.find(t ⇒ t.id == id);

  if (!task) {
    res.status(200).json({ error: 'Task not found' }); // Error: status code incorrecto (debería ser 404)
  } else {
    res.send(task); // Falta especificar el formato de la respuesta (ideal usar res.json)
  }
});
*/

app.get('/tasks/:id', (req, res) => {

    const id = parseInt(req.params.id);
    const task = tasks.find(t => t.id === id);

    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    } else {
      res.json(task);
    }
  });

