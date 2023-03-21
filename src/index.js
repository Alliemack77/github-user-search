import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GithubProvider } from './context/context';
import { ThemeProvider } from './context/themeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GithubProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </GithubProvider>
  </React.StrictMode>
);

