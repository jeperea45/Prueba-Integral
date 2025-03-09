const taskModel = require('../models/Task');

exports.getAllTasks = (req, res) => {
  const tasks = taskModel.getTasks();
  res.json(tasks);
};

exports.createTask = (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ error: 'Se requieren título y descripción.' });
  }
  const task = taskModel.addTask(title, description);
  res.status(201).json(task);
};

exports.updateTaskStatus = (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  if (!status) {
    return res.status(400).json({ error: 'Se requiere un status válido.' });
  }
  const task = taskModel.updateTaskStatus(id, status);
  if (task) {
    res.json(task);
  } else {
    res.status(404).json({ error: 'Tarea no encontrada o status inválido.' });
  }
};

exports.deleteTask = (req, res) => {
  const { id } = req.params;
  const task = taskModel.deleteTask(id);
  if (task) {
    res.json({ message: 'Tarea eliminada.', task });
  } else {
    res.status(404).json({ error: 'Tarea no encontrada.' });
  }
};
