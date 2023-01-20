import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles/index.scss";
import App from './App';


//Redux
import { Provider } from 'react-redux';
import rootReducer from './reducers'
import { configureStore } from '@reduxjs/toolkit'



const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== "production",
});



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
    
);

