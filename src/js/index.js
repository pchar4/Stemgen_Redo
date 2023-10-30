import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LoginPage from './LoginPage'; 
import './index.scss';

const rootElement = document.getElementById('root');

let isLoggedIn = false; // Initialize isLoggedIn status as false

// Callback function to update isLoggedIn status
const updateLoginStatus = (status) => {
  isLoggedIn = status;
  renderApp();
};

// Function to conditionally render App or LoginPage
const renderApp = () => {
  ReactDOM.render(
    isLoggedIn ? <App /> : <LoginPage onLogin={updateLoginStatus} />, // Conditionally render App or LoginPage
    rootElement
  );
};

// Initial rendering
renderApp();
