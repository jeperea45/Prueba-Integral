import { useState, useEffect } from 'react';
import { TaskCard } from './components/TaskCard';
import { TaskForm } from './components/TaskForms';
import { Task, TaskStatus } from './types';
import { ClipboardList } from 'lucide-react';
import { api } from './utils/api';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const data = await api.getTasks();
      setTasks(data);
    } catch (err) {
      setError(`Failed to load tasks: ${err}`);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateTask = async (title: string, description: string) => {
    try {
      await api.createTask({ title, description });
      loadTasks();
    } catch (err) {
      setError(`Failed to create task: ${err}`);
    }
  };

  const handleStatusChange = async (taskId: string, newStatus: TaskStatus) => {
    try {
      await api.updateTaskStatus(taskId, newStatus);
      loadTasks();
    } catch (err) {
      setError(`Failed to update task status: ${err}`);
    }
  };

  const handleDeleteTask = async (taskId: string) => {
    try {
      await api.deleteTask(taskId);
      loadTasks();
    } catch (err) {
      setError(`Failed to delete task: ${err}`);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-gray-500">Loading tasks...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-12 px-4">
        <div className="flex items-center justify-center mb-12">
          <ClipboardList size={32} className="text-blue-500 mr-3" />
          <h1 className="text-4xl font-bold text-gray-900">Team Task Manager</h1>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6" role="alert">
            <span className="block sm:inline">{error}</span>
            <button
              onClick={() => setError('')}
              className="absolute top-0 right-0 px-4 py-3"
            >
              <span className="sr-only">Close</span>
              <span className="text-xl">&times;</span>
            </button>
          </div>
        )}

        <TaskForm onSubmit={handleCreateTask} />

        <div className="space-y-6">
          {tasks.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No tasks yet. Create your first task above!</p>
            </div>
          ) : (
            tasks.map(task => (
              <TaskCard
                key={task.id}
                task={task}
                onStatusChange={handleStatusChange}
                onDelete={handleDeleteTask}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;