import { Todo } from '../types/todo';

const today = new Date();
const hour = today.getHours();

export const dummyTodos: Todo[] = [
  {
    id: 1,
    text: '리액트 공부하기',
    completed: false,
    createdAt: new Date(today.setHours(hour - 4))
  },
  {
    id: 2,
    text: '빨래 하기',
    completed: true,
    createdAt: new Date(today.setHours(hour - 3))
  },
  {
    id: 3,
    text: '운동하기',
    completed: false,
    createdAt: new Date(today.setHours(hour - 2))
  },
  {
    id: 4,
    text: '장보기',
    completed: false,
    createdAt: new Date(today.setHours(hour - 1))
  },
  {
    id: 5,
    text: '일기 쓰기',
    completed: false,
    createdAt: new Date(today.setHours(hour))
  }
]; 