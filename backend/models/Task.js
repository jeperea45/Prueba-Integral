class Task {
  constructor(id, title, description, status = "ToDo") {
    this.id = id;
    this.title = title;
    this.description = description;
    this.status = status;
    this.createdAt = new Date().toISOString();
  }
}

class TaskModel {
  constructor() {
    this.tasks = [];
    this.nextId = 1;
  }

  addTask(title, description) {
    const task = new Task(this.nextId++, title, description);
    this.tasks.push(task);
    return task;
  }

  getTasks() {
    return this.tasks;
  }

  updateTaskStatus(id, newStatus) {
    const allowedStatuses = ["ToDo", "Progress", "Done"];
    if (!allowedStatuses.includes(newStatus)) {
      return null;
    }
    const task = this.tasks.find(t => t.id === parseInt(id));
    if (task) {
      task.status = newStatus;
      return task;
    }
    return null;
  }

  deleteTask(id) {
    const index = this.tasks.findIndex(t => t.id === parseInt(id));
    if (index !== -1) {
      return this.tasks.splice(index, 1)[0];
    }
    return null;
  }
}

const taskModel = new TaskModel();
module.exports = taskModel;
