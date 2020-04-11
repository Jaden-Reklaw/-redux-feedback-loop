import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// Bring in Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
//Bring in Redux Logger
import logger from 'redux-logger';

//Add reducers to create global state
const feedback = (state = {feedback: {feel: '', understand: '',}}, action) => {
    //Update Redux state for Feel 
    if(action.type === 'SET_FEEL') {
        let feelObj = action.payload;
        state.feedback.feel = feelObj
        console.log('Redux State Feel', state);
        return state;
    }
    //Update Redux state for Understand
    if(action.type === 'SET_UNDERSTAND') {
        let understandObj = action.payload;
        state.feedback.understand = understandObj
        console.log('Redux State Feel', state);
        return state;
    }
    
    return state;
}

// The store is the big JavaScript Object that holds all of the information for our application
const storeInstance = createStore(
    combineReducers({feedback}), //Add reducer functions to combineReducers
    applyMiddleware(logger) //Add our middleware logger
);

// Wrap our App in a Provider, this makes Redux available in our entire application
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
