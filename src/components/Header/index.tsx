import React from 'react';
import DarkModeToggle from './DarkModeToggle';
import TodoFilter from './TodoFilter';
import { TodoFilter as FilterType } from '../../types/todo';
import './Header.css';

interface HeaderProps {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

const Header: React.FC<HeaderProps> = ({
  isDarkMode,
  onToggleDarkMode,
  currentFilter,
  onFilterChange,
}) => {
  return (
    <header className="App-header">
      <div className="header-content">
        <h1>Todo 앱</h1>
        <DarkModeToggle isDarkMode={isDarkMode} onToggle={onToggleDarkMode} />
      </div>
      <TodoFilter currentFilter={currentFilter} onFilterChange={onFilterChange} />
    </header>
  );
};

export default Header; 