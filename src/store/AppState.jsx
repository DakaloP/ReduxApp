

// Out courier component for dispatching all actions to app
import { React } from 'react'
import AppContext from './AppContext'
import AppReducer from './AppReducer'
import { useReducer } from 'react';
import {
    INCREASE_COUNT,
    DECREASE_COUNT,
    RESET}
from './actions';
import App from '../App';

function AppState({ children}) {
const initialState = {
    counter: 0,//state variable
}

//Create a dispatcher with Reducer and initial state
//we replace useState with dispatcher

const [state, dispatch] = useReducer(AppReducer, initialState);



     return (
 // His vihicle
 //Provide state and dispatch to children components
   <AppContext.Provider 
      value={{
 state,dispatch,counter: state.counter

      }}
      >
         {children}
</AppContext.Provider>

    )}
export default AppState
