import React from 'react';
import { FaRegMoon, FaRegSun } from 'react-icons/fa';
import { useTheme } from './ThemeContext';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      aria-label="Toggle theme"
      className="theme-toggle-icon"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      style={{ background: 'none', border: 'none', padding: 0, margin: 0, cursor: 'pointer' }}
    >
      <span className="theme-toggle-icon-inner">
        {theme === 'dark' ? (
          <FaRegSun className="text-yellow-400" size={24} />
        ) : (
          <FaRegMoon className="text-gray-700" size={24} />
        )}
      </span>
    </button>
  );
} 