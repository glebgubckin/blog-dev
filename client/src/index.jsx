import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import UserStore from '@store/UserStore'  
import ArticleStore from '@store/ArticleStore'  
import './index.css'

export const Context = createContext(null)

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider value={{
      user: new UserStore(),
      article: new ArticleStore()
    }}>
      <App />
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
