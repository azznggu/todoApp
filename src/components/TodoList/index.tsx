import React from 'react';
import { Todo } from '../../types/todo';
import './TodoList.css';

interface TodoListProps {
  todos: Todo[];
  onToggleTodo: (id: number) => void;
  onDeleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggleTodo, onDeleteTodo }) => {
  if (todos.length === 0) {
    return <p className="empty-message">할 일이 없습니다.</p>;
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggleTodo(todo.id)}
            className="todo-checkbox"
          />
          <span className="todo-text">{todo.text}</span>
          <span className="todo-date">
            {new Date(todo.createdAt).toLocaleDateString()}
          </span>
          <button
            onClick={() => onDeleteTodo(todo.id)}
            className="delete-button"
          >
            삭제
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList; 