import React from 'react';
import './DarkModeToggle.css';

interface DarkModeToggleProps {
  isDarkMode: boolean;
  onToggle: () => void;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ isDarkMode, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className={`dark-mode-toggle ${isDarkMode ? 'dark' : 'light'}`}
    >
      {isDarkMode ? '🌙' : '☀️'} {isDarkMode ? '라이트 모드' : '다크 모드'}
    </button>
  );
};

export default DarkModeToggle; 