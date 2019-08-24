import React from 'react';
import './Todo.css';
import List from './components/List/';

function Todo() {
  const ThemeColorContext = React.createContext('#fff');

  return (
    <ThemeColorContext.Provider>
      <List />
    </ThemeColorContext.Provider>
  );
}

export default Todo;
