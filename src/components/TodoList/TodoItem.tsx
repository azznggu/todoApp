import React from 'react';
import { Todo } from '../../types/todo';
import './TodoItem.css';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="todo-checkbox"
      />
      <span className="todo-text">{todo.text}</span>
      <span className="todo-date">
        {new Date(todo.createdAt).toLocaleDateString()}
      </span>
      <button
        onClick={() => onDelete(todo.id)}
        className="delete-button"
      >
        삭제
      </button>
    </li>
  );
};

export default TodoItem; 