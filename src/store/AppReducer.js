import {
    INCREASE_COUNT,
    DECREASE_COUNT,
    RESET}
from './actions';


function AppReducer(state, action) {
    switch (action.type) {
        case INCREASE_COUNT:
// copy everything from state, inside change counter to increase
            return {
                ...state,
                counter: state.counter ++};


// copy everything from state, inside change counter to decrease
        case DECREASE_COUNT:
            return {
                ...state,
                counter: state.counter --};
// copy everything from state, reset counter to 0
        case RESET:
            return {
                ...state,
                counter: 0};
    }

      default:
        return state;
    }
