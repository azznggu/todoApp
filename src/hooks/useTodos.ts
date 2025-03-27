import { useState, useEffect } from 'react';
import { Todo, TodoFilter } from '../types/todo';
import { dummyTodos } from '../datas/dummy-todos';

const STORAGE_KEY = 'todos';

export const useTodos = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem(STORAGE_KEY);
    console.log('Saved todos from localStorage:', savedTodos);
    console.log('Dummy todos:', dummyTodos);
    
    if (savedTodos) {
      const parsedTodos = JSON.parse(savedTodos).map((todo: any) => ({
        ...todo,
        createdAt: new Date(todo.createdAt)
      })) as Todo[];
      console.log('Using saved todos:', parsedTodos);
      return parsedTodos;
    }
    
    console.log('Using dummy todos');
    // localStorage에 더미 데이터를 초기값으로 저장
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dummyTodos));
    return dummyTodos;
  });

  const [filter, setFilter] = useState('all' as TodoFilter);

  useEffect(() => {
    console.log('Saving todos to localStorage:', todos);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
      createdAt: new Date()
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo: Todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo: Todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo: Todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return {
    todos: filteredTodos,
    addTodo,
    toggleTodo,
    deleteTodo,
    filter,
    setFilter
  };
}; 