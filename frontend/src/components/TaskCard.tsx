import React from 'react';
import { Clock, Trash2, ArrowRight } from 'lucide-react';
import { Task, TaskStatus } from '../types';

interface TaskCardProps {
  task: Task;
  onStatusChange: (id: string, status: TaskStatus) => void;
  onDelete: (id: string) => void;
}

const getNextStatus = (currentStatus: TaskStatus): TaskStatus => {
  const statusFlow: Record<TaskStatus, TaskStatus> = {
    'ToDo': 'Progress',
    'Progress': 'Done',
    'Done': 'Done'
  };
  return statusFlow[currentStatus];
};

const statusColors = {
  'ToDo': 'bg-yellow-100 text-yellow-800',
  'Progress': 'bg-blue-100 text-blue-800',
  'Done': 'bg-green-100 text-green-800'
};

export const TaskCard: React.FC<TaskCardProps> = ({ task, onStatusChange, onDelete }) => {
  const formattedDate = new Date(task.createdAt).toLocaleString();
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{task.title}</h3>
          <p className="text-gray-600 mt-2">{task.description}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[task.status]}`}>
          {task.status}
        </span>
      </div>
      
      <div className="flex items-center text-gray-500 text-sm mb-4">
        <Clock size={16} className="mr-2" />
        <span>{formattedDate}</span>
      </div>
      
      <div className="flex justify-between items-center">
        {task.status !== 'Done' && (
          <button
            onClick={() => onStatusChange(task.id, getNextStatus(task.status))}
            className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            <span className="mr-2">Move to {getNextStatus(task.status)}</span>
            <ArrowRight size={16} />
          </button>
        )}
        <button
          onClick={() => onDelete(task.id)}
          className="flex items-center px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors ml-auto"
        >
          <Trash2 size={16} className="mr-2" />
          Delete
        </button>
      </div>
    </div>
  );
};